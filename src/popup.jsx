import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { getCurrentUrl } from './services/chrome';
import { login, insertBookmark } from './services/shiori';
import { username, password } from './config';

const createBookmarkOfCurrentPage = async () => {
  const { url } = await getCurrentUrl();
  const { token, ok } = await login(username, password, true);

  if (ok) {
    return insertBookmark(token, url);
  }
  return false;
};

createBookmarkOfCurrentPage();

ReactDOM.render(<App />, document.getElementById('app'));
