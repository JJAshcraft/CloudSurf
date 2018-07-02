import React, {Component} from 'react';
import firebase from './firebase';
// import firebase from 'firebase/app';
// import 'firebase/<PACKAGE>';

class UserList extends Component{
    constructor(props){
        super(props);
        this.state ={
            userlist: []
        }

    }
    componentDidMount(){
        var userRef = firebase.database().ref('users');
        userRef.on('value', snapshot => {
            console.log(snapshot.val())
            this.setState({
                userlist: snapshot.val()
            })
        })
    }
    render(){
        console.log(this.state.userlist);
        const style ={
            flex: 1,
            width: '300px'
        }
        return(
            <div style={style}>
                {this.state.userlist.map(user => (
                    <div>
                        <h1>{user.email}</h1>
                    </div>
                ))}
            </div>
        )
    }
}
export default UserList;