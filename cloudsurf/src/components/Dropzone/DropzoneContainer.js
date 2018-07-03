import React from 'react'
import DropzoneImg from './DropzoneImg'
import DropzoneInfo from './DropzoneInfo'
import DropzoneUsers from './DropzoneUsers'
import DropzoneEvents from './DropzoneEvents'
import './dropzonecontainer.css'
import styled from 'styled-components';

const FriendDiv = styled.div `
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


const Wrapper = styled.div `
position:absolute;
top: 70px;
height: 70vh;
margin: 0 auto;
`

const DropzoneContainer = ({dropzone}) =>

<Wrapper>
  <FriendDiv>
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

export default DropzoneContainer
