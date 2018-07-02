import React, { Component } from 'react';
import Map from './components/Map';
import UserList from './components/UserList';
import firebase from './firebase'
import './App.css';

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
<<<<<<< HEAD
      this.setState({ users: snapshot.val() })
    })
||||||| merged common ancestors
      this.setState({ users:snapshot.val() })
    })
=======
      this.setState({ users:snapshot.val() })
    })    


    let dzRef = firebase.database().ref('dropzones');
    dzRef.on('value', snapshot => {
      console.log(snapshot.val())
      this.setState({ dropzones:snapshot.val() })
    })    
>>>>>>> 5d028969030a573751b920724d6936f746aa5492

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
