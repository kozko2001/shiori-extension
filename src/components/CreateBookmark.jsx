import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col } from 'react-bootstrap';

export default class CreateBookmark extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);

    this.state = {
      url: props.url,
      title: props.title,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      url: nextProps.url,
      title: nextProps.title,
    });
  }

  validateForm() {
    return this.state.url.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handlerSubmit(e) {
    this.props.onSubmitBookmark(this.state.url, this.state.title);

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
                <FormGroup controlId="url" bsSize="sm">
                  <ControlLabel>Url</ControlLabel>
                  <FormControl
                    autoFocus
                    value={this.state.url}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={10} xsOffset={1}>
                <FormGroup controlId="title" bsSize="sm">
                  <ControlLabel>Title</ControlLabel>
                  <FormControl
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={10} xsOffset={1}>
                <Button
                  block
                  bsSize="large"
                  type="submit"
                  disabled={!this.validateForm()}
                >
                  Send bookmark
                </Button>
              </Col>
            </Row>
          </Grid>
        </form>
      </div>
    );
  }
}

CreateBookmark.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onSubmitBookmark: PropTypes.func.isRequired,
};
