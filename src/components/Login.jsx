import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, Checkbox, ControlLabel, Grid, Row, Col } from 'react-bootstrap';
import { loginInfoChanged, loginStarted } from '../redux/actions';


class Login extends Component {
  constructor(props) {
    super(props);

    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlerCheckbox = this.handlerCheckbox.bind(this);
  }

  handleChange(event) {
    this.props.changeInfo(event.target.id, event.target.value);
  }

  handlerCheckbox(checked) {
    this.props.changeInfo('remember', checked);
  }

  handlerSubmit(e) {
    this.props.login();
    e.preventDefault();
    return false;
  }

  validateForm() {
    return this.props.username.length > 0 && this.props.password.length > 0;
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handlerSubmit}>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1}>
                <FormGroup controlId="basePath" bsSize="sm">
                  <ControlLabel>Service Url</ControlLabel>
                  <FormControl
                    value={this.props.basePath}
                    onChange={this.handleChange}
                    placeholder="http://shiori.domain.net"
                  />
                </FormGroup>
              </Col>
              <Col xs={10} xsOffset={1}>
                <FormGroup controlId="username" bsSize="sm">
                  <ControlLabel>Username</ControlLabel>
                  <FormControl
                    autoFocus
                    value={this.props.username}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={10} xsOffset={1}>
                <FormGroup controlId="password" bsSize="sm">
                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                    value={this.props.password}
                    onChange={this.handleChange}
                    type="password"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={10} xsOffset={1}>
                <Checkbox
                  onClick={e => this.handlerCheckbox(e.target.checked)}
                  checked={this.props.remember}
                >
                  Remember
                </Checkbox>
              </Col>
            </Row>
            <Row>
              <Col xs={10} xsOffset={1}>
                <Button
                  block
                  bsSize="large"
                  disabled={!this.validateForm()}
                  type="submit"
                >
                  Login
                </Button>
              </Col>
            </Row>
          </Grid>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  basePath: PropTypes.string.isRequired,
  remember: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  changeInfo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  username: state.login.username,
  password: state.login.password,
  remember: state.login.remember,
  basePath: state.login.basePath,
});

const mapDispatchToProps = dispatch => ({
  changeInfo: (key, value) => dispatch(loginInfoChanged(key, value)),
  login: () => dispatch(loginStarted()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
