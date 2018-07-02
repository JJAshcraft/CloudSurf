import React, {Component} from 'react';
import User from './User'

class UserList extends Component{
    constructor(props){
        super(props);
        this.state ={
            userlist: []
        }

    }
    componentDidMount(){
        this.setState({
            userlist: this.props.users
        })
    }
    render(){
        console.log(this.state.userlist);
        console.log(this.props.users);
        return(
            <div className="userList">
                {this.props.users.map(user => (
                    <User key={user.id} user={user}  />
                ))}
            </div>
        )
    }
}
export default UserList;