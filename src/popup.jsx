import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { login, insertBookmark } from './services/shiori';
import { username, password } from './config';

const doTest = async () => {
  const { token, ok } = await login(username, password, true);
  if (ok) {
    console.log('token', token);
    return insertBookmark(token, 'https://allocsoc.net');
  }
  return false;
};

doTest().then((res) => {
  console.log(res);
});

console.log(document.getElementById('app'));
ReactDOM.render(<App />, document.getElementById('app'));
