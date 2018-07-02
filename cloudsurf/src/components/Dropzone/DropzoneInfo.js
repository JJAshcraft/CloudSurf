import React from 'react'

// <DropzoneInfo info={infoObject} />


const DropzoneInfo = props => {  
  
  const {
    name, 
    location,
    contactInfo,
    hours
  } = props.info

  return (
    <div>
      <div>{name}</div>
      <div>{location}</div>
      <div>{contactInfo}</div>
      <div>{hours}</div>
    </div>
  )
}

export default DropzoneInfo
