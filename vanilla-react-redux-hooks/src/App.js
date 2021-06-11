import React, { Component } from 'react';
import Logo from './klogo.js';
import './App.css';
import { Home } from './components/Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <h1 className="App-title">Welcome to Kyruus</h1>
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
