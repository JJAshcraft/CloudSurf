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
      <div>{name}</div>
      <div>{address}</div>
      <div>{phone}</div>
      <div>{web}</div>
      <div>{rating}</div>
    </div>
  )
}

export default DropzoneInfo
