import React, { Component } from 'react';
import Map from './components/Map';
import './App.css';
import firebase from './f';
import FrontPage from './components/FrontPage';

const provider = new firebase.auth.FacebookAuthProvider();

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      currentUser: null,
      isLoggedIn: true,
      
    }
  }


FacebookSignIn = () => {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    console.log(result);
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
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
       <Map />
      </div>
    );
  }
}

export default App;
