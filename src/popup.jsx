import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { getCurrentUrl } from './services/chrome';

console.log(getCurrentUrl)
getCurrentUrl().then((res) => {
  console.log(res);
});

console.log(document.getElementById('app'));
ReactDOM.render(<App />, document.getElementById('app'));
