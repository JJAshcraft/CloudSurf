import React from 'react'
import DropzoneImg from './DropzoneImg'
import DropzoneInfo from './DropzoneInfo'
import DropzoneUsers from './DropzoneUsers'
import DropzoneEvents from './DropzoneEvents'
import MyCalendar from './Calander';
import styled from 'styled-components';
import '../../App.css'
import './dropzonecontainer.css'



// padding: 0 20px; width: 507px; height: 90vh;

const FriendDiv = styled.div `
position: relative;
width: 507px;
// padding: 0 20px; 
display: flex;
justify-content: center;
align-items:center;
text-align: center;
background-color: #282828;
color: white;
list-style: none;
flex-direction: column;
overflow-y: auto;
height: 80%;
align-items: flex-start;
`


const Wrapper = styled.div `
position:absolute;
top: 70px;
height: 90vh;
margin: 0 auto;
`

const DropzoneContainer = ({dropzone, events, dropId}) =>{
  const filtereEevents = []
  for(let x in events){
    events[x].dropZoneId == dropId ? filtereEevents.push(events[x]) : null;
  }

 return ( 
      <Wrapper>
        <FriendDiv>
        <MyCalendar events={filtereEevents}/>
        <div class='dropzone-container'>
          {console.log(dropzone)}
          <DropzoneImg 
            url={dropzone.photoURL}
            name={dropzone.name}  />
          <DropzoneInfo info={dropzone} />
          <DropzoneUsers users={dropzone.userIds}/>
          <DropzoneEvents />
        </div>
        </FriendDiv>
      </Wrapper>
    )
  }

export default DropzoneContainer
