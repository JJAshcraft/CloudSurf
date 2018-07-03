import React, { Component } from 'react';
import Map from './components/Map';
import DropzoneContainer from './components/Dropzone/DropzoneContainer'
import './App.css';
import FrontPage from './components/FrontPage';
import firebase, {auth, provider} from './firebase';
import styled from 'styled-components';

const Header = styled.div`
background-color: #555358;
width: 100%;
height: 100px;
position: absolute;
top: 0;
`
// import UserList from './components/UserList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      currentUser: null,
      isLoggedIn: false,
      // firebase returns indexed objects
      dropzones: null,
    }
 this.FacebookSignIn.bind(this);
 this.SignOut.bind(this);
  }
  
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {

        this.setState({
          isLoggedIn: true,
          currentUser: user,
        });
      } else {
        this.setState({
          isLoggedIn: false,
          currentUser: null,
        });
      }
    });
<<<<<<< HEAD
    // })   
||||||| merged common ancestors
    })    
=======
  }

  componentDidMount(){

    let usersRef = firebase.database().ref('users');
    usersRef.on('value', snapshot => {
      // console.log(snapshot.val())
      this.setState({ users:snapshot.val() })
    });
>>>>>>> 761d309972a6df7937846c97204b0eb8ed14af6b

    

    let dzRef = firebase.database().ref('dropzones');
    dzRef.on('value', snapshot => {
      let dropzones = Object.entries(snapshot.val())
      this.setState({ dropzones })
    })    

  }


FacebookSignIn () {
firebase.auth().signInWithPopup(provider)
.then(function (result) {
  if (result.credential) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
  console.log(user);
}).catch(function (error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
});
}  

SignOut() {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
  });
  this.setState({isLoggedIn:false})

}


  render() {
    console.log(this.state.dropzones)
    return (
      <div className="App">
      {this.state.isLoggedIn? <div><Header><button type='submit' onClick={this.SignOut} >Logout</button></Header> </div>: <div><Header><button type='submit' onClick={this.FacebookSignIn}>Facebook Login</button> </Header></div>}
 
      {this.state.dropzones 
       ? <React.Fragment>
          <DropzoneContainer dropzone={this.state.dropzones[40]} />
          <Map dropzone={this.state.dropzones} />
         </React.Fragment>
       : <div>Loading ...</div> }
      </div>
    );
  }
}

export default App;
