import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FlexDiv = styled.div`
 display: flex;
 justify-content: flex-start; 
 align-items: center;
 padding: 5px;
 &:Hover {
     background: #242424;
 }
`
const SmallProfileImage = styled.img`
width: 40px;
height: 40px;
padding-left: 15px;
padding-right: 10px;
`
const WelcomeMessage = styled.p`
font-family: 'Roboto', sans-serif;
font-weight: bold;
font-size: 24px;
text-align: left;
padding: 0;
color: white;
margin: 0;  
`

const SubMessage = styled.p `
font-family: 'Roboto', sans-serif;
font-size: 12px;
text-align: left;
margin: 0;
padding: 0;
color: grey;

`

const Stacker = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
height: 20px;
`



const UserMiniCard = (props) => {
    return (<Link to='/'>
            <FlexDiv>
          {(props.user) && <SmallProfileImage src={props.user.photoURL} />} 
          <Stacker>
           <WelcomeMessage>Welcome, {props.user.displayName}!</WelcomeMessage>
           <SubMessage>Where are we flyin today?</SubMessage>
           </Stacker>
          </FlexDiv>
        </Link>
      
    );
};

export default UserMiniCard;