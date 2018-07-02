import React from 'react'
import DropzoneImg from './DropzoneImg'
import DropzoneInfo from './DropzoneInfo'
import DropzoneUsers from './DropzoneUsers'
import DropzoneEvents from './DropzoneEvents'

const DropzoneContainer =  ({dropzone}) =>
  <div>
    <DropzoneImg />
    <DropzoneInfo info />
    <DropzoneUsers users={[]}/>
    <DropzoneEvents />
  </div>

export default DropzoneContainer
