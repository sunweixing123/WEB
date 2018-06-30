import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import { Router, Route, Link } from 'react-router';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Test from './Test'
class App extends Component {
  render() {
    return (
      <div>
        <h1>APP</h1>
        <ul>
          <li><link to="/header">头部</link></li>
          <li><link to="/test">练习内容</link></li>
        </ul>
      </div>
    );
  }
}


export default App;
