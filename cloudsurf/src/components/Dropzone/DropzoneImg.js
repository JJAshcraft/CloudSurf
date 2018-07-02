import React from 'react'

/* <DropzoneImg 
     url={photoURL}
     name={dropzoneName} />
*/

const DropzoneImg = ({url, name}) =>  
  <img src={url} alt={name} />

export default DropzoneImg

