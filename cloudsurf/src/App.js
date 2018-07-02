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
      dropzones: []
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
<<<<<<< HEAD
      console.log(snapshot.val())
      let newRecords = Object.entries(snapshot.val());
      this.setState({ dropzones: newRecords })
||||||| merged common ancestors
      console.log(snapshot.val())
      this.setState({ dropzones:snapshot.val() })
=======
      let dropzones = Object.entries(snapshot.val())
      this.setState({ dropzones })
>>>>>>> c5cf0751b05ef2ee99e84fbf307be692d5b0d37a
    })    

  }
  
  render() {
    return (
      <div className="App">
       <DropzoneContainer />
       <Map dropzone={this.state.dropzones}/>
      </div>
    );
  }
}

export default App;
