import React, { Component } from 'react';
import Map from './components/Map';
import DropzoneContainer from './components/Dropzone/DropzoneContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <DropzoneContainer />
       <Map />
      </div>
    );
  }
}

export default App;
