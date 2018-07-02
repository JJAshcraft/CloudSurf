import React from 'react'
import DropzoneUser from './DropzoneUser'

const DropzoneUsers = ({users}) => 
  users.map(user =>
    <DropzoneUser user={user} />
  )

export default DropzoneUsers
