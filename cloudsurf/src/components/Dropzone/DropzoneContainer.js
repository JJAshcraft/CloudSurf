import React from 'react'
import DropzoneImg from './DropzoneImg'
import DropzoneInfo from './DropzoneInfo'
import DropzoneUsers from './DropzoneUsers'
import DropzoneEvents from './DropzoneEvents'
import MyCalendar from './Calander';
import '../../App.css'

const DropzoneContainer = ({dropzone, events, dropId}) =>{
  const filtereEevents = []
  for(let x in events){
    events[x].dropZoneId == dropId ? filtereEevents.push(events[x]) : null;
  }

 return (
        <div className='dropzone'>
          <MyCalendar events={filtereEevents}/>
          <DropzoneImg 
            url={dropzone.photoURL}
            name={dropzone.name}  />
          <DropzoneInfo info={dropzone} />
          <DropzoneUsers users={dropzone.userIds}/>
          <DropzoneEvents />
        </div>
      )
}

export default DropzoneContainer
