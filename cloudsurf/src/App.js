import React, { Component } from 'react';
import Map from './components/Map';
import UserList from './components/user';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Map />
      < UserList />
      </div>
    );
  }
}

export default App;
