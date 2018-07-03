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
       ? <React.Fragment>
          <DropzoneContainer dropzone={this.state.dropzones[4]} />
          <Map dropzone={this.state.dropzones}/>
         </React.Fragment>
       : <div>Loading ...</div> }
      </div>
    );
  }
}

export default App;
