import React from 'react'
import DropzoneImg from './DropzoneImg'
import DropzoneInfo from './DropzoneInfo'
import DropzoneUsers from './DropzoneUsers'
import DropzoneEvents from './DropzoneEvents'


const DropzoneContainer = ({dropzone}) =>

  <div>
    {console.log(dropzone)}
    <DropzoneImg 
      url={dropzone.photoURL}
      name={dropzone.name}  />
    <DropzoneInfo info={dropzone} />
    <DropzoneUsers users={dropzone.userIds}/>
    <DropzoneEvents />
  </div>

export default DropzoneContainer
