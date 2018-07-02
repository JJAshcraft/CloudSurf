import React, { Component } from 'react';
import Map from './components/Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CloudSurf</h1>
        </header>
        <p className="App-intro">
        </p> */}
        <Map />
      </div>
    );
  }
}

export default App;
