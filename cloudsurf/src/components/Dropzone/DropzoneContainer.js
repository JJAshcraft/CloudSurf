import React from 'react'
import DropzoneImg from './DropzoneImg'
import DropzoneInfo from './DropzoneInfo'
import DropzoneUsers from './DropzoneUsers'
import DropzoneEvents from './DropzoneEvents'

const DropzoneContainer = () =>
  <React.Fragment>
    <DropzoneImg />
    <DropzoneInfo info />
    <DropzoneUsers users={[]}/>
    <DropzoneEvents />
  </React.Fragment>

export default DropzoneContainer
