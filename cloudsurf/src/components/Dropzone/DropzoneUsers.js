import React from 'react'
import DropzoneUser from './DropzoneUser'
import firebase from '../../firebase'

class DropzoneUsers extends React.Component{
  constructor(props){
    super(props)
    this.usersArray=[]
  }

  componentWillMount(){
    console.log(this.props.users)
     this.props.users.forEach( userId => {
      let usersRef = firebase.database().ref(`users/${userId}`);
      return usersRef.on('value', snapshot => {
          let snapshotVal = snapshot.val()
          this.usersArray.push(snapshotVal)
        })
    })
  }

  render(){
      return ( <div>
                {this.usersArray.map( user =>{
                  if (user) return <DropzoneUser key={Math.random()} user={user} />
                })}
              </div>
            )
    }

}

export default DropzoneUsers
