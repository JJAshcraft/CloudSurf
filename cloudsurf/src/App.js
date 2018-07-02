import React, { Component } from 'react';
import Map from './components/Map';
import UserList from './components/user';
import firebase from './firebase'
import './App.css';

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
       <Map />
      < UserList users={this.state.users}/>
      </div>
    );
  }
}

export default App;
