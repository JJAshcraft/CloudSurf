import React from 'react'
import DropzoneImg from './DropzoneImg'
import DropzoneInfo from './DropzoneInfo'
import DropzoneUsers from './DropzoneUsers'
import DropzoneEvents from './DropzoneEvents'


const DropzoneContainer = ({dropzone}) =>

  <div>
    {console.log(dropzone[1])}
    <DropzoneImg 
      url={dropzone[1].photoURL}
      name={dropzone[1].name}  />
    <DropzoneInfo info={dropzone[1]} />
    <DropzoneUsers users={dropzone[1].usersIds}/>
    <DropzoneEvents />
  </div>

export default DropzoneContainer
