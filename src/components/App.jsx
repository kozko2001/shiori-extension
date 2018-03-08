import React from 'react';
import { Alert } from 'react-bootstrap';
import Login from './Login';
import CreateBookmark from './CreateBookmark';
import { login, insertBookmark } from '../services/shiori';
import { getCurrentUrl } from '../services/chrome';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      token: null,
      url: '',
      title: '',
    };

    this.onLogin = this.onLogin.bind(this);
    this.onSubmitBookmark = this.onSubmitBookmark.bind(this);
  }

  componentWillMount() {
    getCurrentUrl().then(({ url, title }) => {
      this.setState({
        url,
        title,
      });
    });
  }

  onLogin(username, password, remember) {
    login(username, password, remember).then(({ token, ok }) => {
      this.setState({
        error: ok ? null : token,
        token: ok ? token : null,
      });
    });

    return false;
  }

  onSubmitBookmark(url, title) {
    insertBookmark(this.state.token, url, title).then(({ page, ok, error }) => {
      this.setState({
        error: ok ? null : error,
        token: ok ? this.state.token : null,
        page,
      });

      if (ok) {
        setTimeout(() => window.close(), 3000);
      }
    });
  }

  render() {
    return (
      <div className="app">
        { this.state.error != null &&
          <Alert bsStyle="warning">
            {this.state.error}
          </Alert>
        }
        { this.state.page != null &&
          <Alert bsStyle="success">
            Bookmark added correctly!
          </Alert>
        }
        { this.state.token == null &&
          <Login onLogin={this.onLogin} />
        }
        { this.state.token != null &&
          <CreateBookmark
            url={this.state.url}
            title={this.state.title}
            onSubmitBookmark={this.onSubmitBookmark}
          />
        }
      </div>);
  }
}
