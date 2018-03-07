import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Login from './Login';

export default class App extends React.Component {
  render() {
    return (
      <div className="app" style={{width: 400}}>
        <Login />
      </div>);
  }
}
