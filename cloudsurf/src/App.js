import React, { Component } from 'react';
import Map from './components/Map';
import DropzoneContainer from './components/Dropzone/DropzoneContainer';

import FrontPage from './components/FrontPage';
import About from './components/About';
import firebase from './firebase';

import styled from 'styled-components';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import UserMiniCard from './components/UserProfile/UserMiniCard';
import UserFullCard from './components/UserProfile/UserFullCard';
import './App.css';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Calendar from './components/Dropzone/Calendar'

const Header = styled.div`
background-color: #262626;
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
 padding-left: 6px;
 padding-right: 30px;
padding-bottom: 5px;
border-right: 1px solid grey;
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
position: relative;
z-index: 1000;
width: 160px;
top:-17px;

`


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      currentUser: null,
      isLoggedIn: false,
      // firebase returns indexed objects
      dropzones: null,
      events: [],
      modal:false,
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
      this.setState({ dropzones })
    })
    let eventRef = firebase.database().ref('events');
    eventRef.on('value', snapshot => {
      // let dropzones = Object.entries(snapshot.val())
      const events = snapshot.val();
      this.setState({ events })
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

toggle = ()=> {
  this.setState({
    modal: !this.state.modal
  });
}

  render() {    
    return (
      <div className="App">
      {this.state.isLoggedIn? <div><Header >
           <LogoFlyer src = '/images/logo.svg' />
          <Firstlogo>CloudSurf</Firstlogo>
           <Link style ={{textDecoration: 'none'}} to='/user'> <UserMiniCard user = {this.state.currentUser}/></Link> 
       
      
        <Link to='/'><LogButton onClick={this.SignOut}>Logout</LogButton></Link>  
        </Header>
        <Route path='/' exact render={(props) =>  (<Map {...props}  dropzone={this.state.dropzones}/>) }/>
         <Route path="/user" render={props => 
              <UserFullCard 
                  {...props} 
                  user={this.state.currentUser} />
            } />
      </div> : 
      <div>
        <FrontPage SignIn={this.SignIn}/>
        </div>}
        <div>
          <Route {...this.props} exact path="/dropzone/:id" render={(dropProps) => {
            // console.log(this.state.dropzones)
            return <DropzoneContainer calendarModalToggle={this.toggle} events={this.state.events} dropId={'d2'} {...dropProps} {...this.props} dropzone={this.state.dropzones[dropProps.match.params.id]} />
          }}/>
          <Route path="/about" exact component={About}/>
          
         </div>
         <Modal isOpen={this.state.modal} toggle={this.toggle} className={`${this.props.className} modal-lg`}>
          <ModalHeader toggle={this.toggle}>Drop by one of our events!</ModalHeader>
          <ModalBody>
            <Calendar />
          </ModalBody>
          <ModalFooter>
            <Button id="custom-orange" onClick={this.toggle}>Reserve Your Spot</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default App;


// return <DropzoneContainer events={this.state.events} dropId={'d2'} {...dropProps} {...this.props} dropzone={this.state.dropzones[dropProps.match.params.id]} />
