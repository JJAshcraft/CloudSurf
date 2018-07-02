import React, { Component } from 'react';
import Map from './components/Map';
import './App.css';
import firebase from './firebase'

class App extends Component {
  constructor(){
    super();
    this.state = {
      users:[],
      dropzones:[]
    }
  }
  
  componentDidMount(){
    let usersRef = firebase.database().ref('users');
    usersRef.on('value', snapshot => {
      console.log(snapshot.val())
      this.setState({ users:snapshot.val() })
    })    


    let dzRef = firebase.database().ref('dropzones');
    dzRef.on('value', snapshot => {
      console.log(snapshot.val())
      this.setState({ dropzones:snapshot.val() })
    })    

  }
  
  render() {
    return (
      <div className="App">
       <Map />
      </div>
    );
  }
}

export default App;
