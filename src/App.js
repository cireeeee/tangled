import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppBar Postion="static"><ToolBar></ToolBar>Test</AppBar>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Type <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
