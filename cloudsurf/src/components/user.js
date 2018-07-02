import React, {Component} from 'react';


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
        const style ={
            width: '300px',
            height: '300px'
        }
        return(
            <div style={style} className="userList">
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