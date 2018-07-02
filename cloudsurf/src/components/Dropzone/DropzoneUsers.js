import React from 'react'
import DropzoneUser from './DropzoneUser'

const DropzoneUsers = ({users}) => {
  if(users){
    return (
      users.map(user =>
        <DropzoneUser user={user} />
      )
    )
  }
  return <div></div>
}

export default DropzoneUsers
