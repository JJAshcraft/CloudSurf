import React, { Component } from 'react';
import Map from './components/Map';
import DropzoneContainer from './components/Dropzone/DropzoneContainer';

import FrontPage from './components/FrontPage';
import firebase from './firebase';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import UserMiniCard from './components/UserProfile/UserMiniCard';

import styled from 'styled-components';
import './App.css';

const Header = styled.div`
background-color: #363636;
width: 100%;
height: 60px;
position: absolute;
top: 0;
display: flex;
justify-content: flex-start;
align-items: center;
z-index: 10;
`

const Firstlogo = styled.span`
font-family: 'Pacifico', cursive;
 padding-left: 36px;
padding-bottom: 5px;
 font-size: 28px;
 color: white;
 vertical-align: center;
 z-index: 30;
`

const LogButton = styled.button `
height: 100%;
width: 230px;
background-color: #FAA74A;
color: white;
border: none;
cursor: pointer;
font-size: 22px;
position: absolute;
top: 0;
right: 0;
`
const LogoFlyer = styled.img`
position: absolute;
top: -25px;
left: -75px;
z-index: 20;
width: 250px;

`


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      currentUser: null,
      isLoggedIn: false,
      // firebase returns indexed objects
      dropzones: null
    }
 
  }

  componentDidMount() {

    let usersRef = firebase.database().ref('users');
    usersRef.on('value', snapshot => {
      // console.log(snapshot.val())
      this.setState({ users:snapshot.val() })
    });

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
    // })   


    let dzRef = firebase.database().ref('dropzones');
    dzRef.on('value', snapshot => {
      // let dropzones = Object.entries(snapshot.val())
      const dropzones = snapshot.val();
      // for(let x )
      this.setState({ dropzones })
    })
  }

SignIn = (e) => {
  let provider;
     if (e.target.name === 'facebook') {
      provider = new firebase.auth.FacebookAuthProvider();
     } else if (e.target.name === 'google') {
      provider = new firebase.auth.GoogleAuthProvider();
     }
      firebase.auth().signInWithPopup(provider)
      .then(({ user }) => {
        this.setState({ 
          currentUser: user,
          isLoggedIn: true,
         })
      })
}  

SignOut = () => {

      firebase.auth().signOut().then(() => {
        this.setState({
          currentUser: null,
          isLoggedIn: false,
        })
      })


}


  render() {
    // console.log(this.state.dropzones)
    return (
      <div className="App">
      {this.state.isLoggedIn? <div><Header>
         <LogoFlyer src = '/images/logo.svg' />
          <Firstlogo>CloudSurf</Firstlogo>
         <UserMiniCard user = {this.state.currentUser}/>
        
        <LogButton onClick={this.SignOut}>Logout</LogButton></Header> <Route path='/' render={(props) => {
            return <Map {...props}  dropzone={this.state.dropzones}/>

          }}/></div>: <div><FrontPage><button name='facebook' onClick={this.SignIn}>Facebook Login</button></FrontPage></div>}
 
      <div>
          <Route {...this.props} exact path="/dropzone/:id" render={(dropProps) => {
            // console.log(this.state.dropzones)
            return <DropzoneContainer {...dropProps} {...this.props} dropzone={this.state.dropzones[dropProps.match.params.id]} />
          }}/>
          
          
          
         </div>
   
      </div>
    );
  }
}

export default App;
