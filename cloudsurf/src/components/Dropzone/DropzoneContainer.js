import React from 'react'
import DropzoneImg from './DropzoneImg'
import DropzoneInfo from './DropzoneInfo'
import DropzoneUsers from './DropzoneUsers'
import DropzoneEvents from './DropzoneEvents'
import MyCalendar from './Calendar';
import styled from 'styled-components';
import '../../App.css'
import './dropzonecontainer.css'
import {Route, Link} from 'react-router-dom';



const OuterDiv = styled.div `
position: relative;
width: 430px;
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

const UserDiv = styled.div `
position: relative;
width: 430px;
display: flex;
justify-content: center;
align-items:center;
text-align: center;
background-color: #282828;
color: white;
list-style: none;
flex-direction: column;
overflow-y: scroll;
height: 100px;
align-items: flex-start;
`

const Wrapper = styled.div `
position:absolute;
top: 70px;
height: 70vh;
margin: 0 auto;
`
const UserWrapper = styled.div`
position: Absolute;
height: 100%;
`


const DropzoneContainer = ({dropzone, events, dropId}) =>{
  const filtereEevents = []
  for(let x in events){
    events[x].dropZoneId == dropId ? filtereEevents.push(events[x]) : null;
  }

return (
<Wrapper>
  <div className="image-background">
<DropzoneImg 
      url={dropzone.photoURL}
      name={dropzone.name}  />
</div>
  <OuterDiv>
  <div class='dropzone-container'>
    {console.log(dropzone)}
    
    <DropzoneInfo info={dropzone} />
    <Link to='/events'>See our events</Link>
     <Route path = 'events' render={props=> {
<MyCalendar events={filtereEevents}/>
     }} />
    <UserDiv>
      <UserWrapper>
    <DropzoneUsers users={dropzone.userIds}/>
    </UserWrapper>
    </UserDiv>
  </div>
</OuterDiv>
  </Wrapper>
)
}

export default DropzoneContainer;
