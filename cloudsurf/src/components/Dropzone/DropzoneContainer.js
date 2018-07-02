import React from 'react'
import DropzoneImg from './DropzoneImg'
import DropzoneInfo from './DropzoneInfo'
import DropzoneUsers from './DropzoneUsers'
import DropzoneEvents from './DropzoneEvents'


const DropzoneContainer = ({dropzone}) =>

  <div>
    <DropzoneImg 
      url={dropzone[1].photoURL}
      name={dropzone[1].name}  />
    <DropzoneInfo info={dropzone[1]} />
    <DropzoneUsers users={dropzone[1].userIds}/>
    <DropzoneEvents />
  </div>

export default DropzoneContainer
