import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col } from 'react-bootstrap';
import { insertBookmarkAction, initializeBookmark, changeBookmark } from '../redux/actions';

class CreateBookmark extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  componentDidMount() {
    this.props.initializeBookmark();
  }

  validateForm() {
    return this.props.url.length > 0;
  }

  handleChange(event) {
    const data = {
      title: this.props.title,
      url: this.props.url,
    };

    data[event.target.id] = event.target.value;
    this.props.changeInfo(data.url, data.title);
  }

  handlerSubmit(e) {
    this.props.insertBookmark();

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
                    value={this.props.url}
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
                    value={this.props.title}
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
  changeInfo: PropTypes.func.isRequired,
  insertBookmark: PropTypes.func.isRequired,
  initializeBookmark: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  url: state.bookmark.url,
  title: state.bookmark.title,
});

const mapDispatchToProps = dispatch => ({
  changeInfo: (url, title) => dispatch(changeBookmark(url, title)),
  insertBookmark: () => dispatch(insertBookmarkAction()),
  initializeBookmark: () => dispatch(initializeBookmark()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBookmark);
