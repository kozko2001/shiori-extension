import React from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from './Login';
import CreateBookmark from './CreateBookmark';

const App = props => (
  <div className="app">
    {props.error != null &&
      <Alert bsStyle="warning">
        {props.error}
      </Alert>
    }
    {props.bookmarkState === 'SUCCESS' &&
      <Alert bsStyle="success">
        Bookmark added correctly!
      </Alert>
    }
    {props.loginState !== 'LOGGED' &&
      <Login />
    }
    {props.loginState === 'LOGGED' &&
      <CreateBookmark
        url="test"
        title="title"
      />
    }
  </div>);

App.propTypes = {
  error: PropTypes.string,
  loginState: PropTypes.string.isRequired,
  bookmarkState: PropTypes.string.isRequired,

};
App.defaultProps = {
  error: null,
};

const mapStateToProps = state => ({
  error: state.login.error || state.bookmark.error,
  loginState: state.login.state,
  bookmarkState: state.bookmark.state,
});

export default connect(mapStateToProps)(App);
