import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, FormControl, Checkbox, ControlLabel, Grid, Row, Col } from 'react-bootstrap';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handlerCheckbox = this.handlerCheckbox.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      remember: true,
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handlerCheckbox(checked) {
    this.setState({
      remember: checked,
    });
  }

  handlerSubmit(e) {
    this.props.onLogin(this.state.email, this.state.password, this.state.remember);
    e.preventDefault();
    return false;
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handlerSubmit}>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1}>
                <FormGroup controlId="email" bsSize="sm">
                  <ControlLabel>Email</ControlLabel>
                  <FormControl
                    autoFocus
                    value={this.state.email}
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
                    value={this.state.password}
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
                  checked={this.state.remember}
                  onChange={this.handleChange}
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
  onLogin: PropTypes.func.isRequired,
};
