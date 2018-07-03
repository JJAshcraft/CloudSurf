import React, { Component } from 'react';
import Map from './components/Map';
import DropzoneContainer from './components/Dropzone/DropzoneContainer'
import './App.css';
import FrontPage from './components/FrontPage';
import firebase from './firebase';
import styled from 'styled-components';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import UserMiniCard from './components/UserProfile/UserMiniCard';

const Header = styled.div`
background-color: #555358;
width: 100%;
height: 60px;
position: absolute;
top: 0;
display: flex;
justify-content: center;
align-items: center;
`

const Logo = styled.span`
 padding-left: 10px;
 padding-right: 15px;
 border-right: 1px solid white;
 font-size: 28px;
 color: white;
 font-weight: bold;
 vertical-align: center;
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
         <Logo>CloudSurf</Logo> <UserMiniCard user = {this.state.currentUser}/>
        
        <button onClick={this.SignOut}>Logout</button></Header> </div>: <div><Header><button  name='google' onClick={this.SignIn}>Facebook Login</button> </Header></div>}
 
      {this.state.dropzones 
       ? <div>
          <Route {...this.props} exact path="/dropzone/:id" render={(dropProps) => {
            // console.log(this.state.dropzones)
            return <DropzoneContainer {...dropProps} {...this.props} dropzone={this.state.dropzones[dropProps.match.params.id]} />
          }}/>
          />
          <Route path='/' render={(props) => {
            return <Map {...props}  dropzone={this.state.dropzones}/>

          }}/>
          
         </div>
       : <div>Loading ...</div> }
      </div>
    );
  }
}

export default App;
