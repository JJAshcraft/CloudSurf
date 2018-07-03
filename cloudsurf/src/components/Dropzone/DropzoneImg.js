import React from 'react';
import './dropzonecontainer.css';

/* <DropzoneImg 
     url={photoURL}
     name={dropzoneName} />
*/

const DropzoneImg = ({url, name}) =>  
  <img className='dzimage' src={url} alt={name} />

export default DropzoneImg

