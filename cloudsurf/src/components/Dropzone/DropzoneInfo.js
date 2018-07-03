import React from 'react'

// <DropzoneInfo info={infoObject} />


const DropzoneInfo = props => {  
  
  const {
    name, 
    address,
    phone,
    web,
    rating
  } = props.info

  return (
    <div>
      <h1>{name}</h1>
      <div>{address}</div>
      <div>{phone}</div>
      <div>{web}</div>
      <div>{rating}</div>
    </div>
  )
}

export default DropzoneInfo
