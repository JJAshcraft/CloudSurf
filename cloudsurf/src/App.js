import React, { Component } from 'react';
import Map from './components/Map';
import DropzoneContainer from './components/Dropzone/DropzoneContainer'
import './App.css';
// import UserList from './components/UserList';
import firebase from './firebase'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      // firebase returns indexed objects
      users: [],
      dropzones: null
    }
  }
  
  componentDidMount(){
    let usersRef = firebase.database().ref('users');
    usersRef.on('value', snapshot => {
      // console.log(snapshot.val())
      this.setState({ users:snapshot.val() })
    })    


    let dzRef = firebase.database().ref('dropzones');
    dzRef.on('value', snapshot => {
      let dropzones = Object.entries(snapshot.val())
      this.setState({ dropzones })
    })    

  }
  
  render() {
    console.log(this.state.dropzones)
    return (
      <div className="App">
      {this.state.dropzones 
       ? <DropzoneContainer dropzone={this.state.dropzones[40]} />
       : <div>Loading Dropzone</div> }
       
       <Map dropzone={this.state.dropzones}/>
      </div>
    );
  }
}

export default App;
