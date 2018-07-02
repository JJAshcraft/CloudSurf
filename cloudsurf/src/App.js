import React, { Component } from 'react';
import Map from './components/Map';
import DropzoneContainer from './components/Dropzone/DropzoneContainer'
import './App.css';
import firebase from './firebase'

class App extends Component {
  constructor(){
    super();
    this.state = {
      users:[]
    }
  }
  
  componentDidMount(){
    let usersRef = firebase.database().ref('users');

    usersRef.on('value', snapshot => {
      console.log(snapshot.val())
      this.setState({ users:snapshot.val() })
    })

  }
  
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
