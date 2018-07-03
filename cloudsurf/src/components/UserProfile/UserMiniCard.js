import React from 'react';
import styled from 'styled-components';

const FlexDiv = styled.div`
 display: flex;
 justify-content: flex-start; 
 align-items: center;
 padding-left: 5px;
`
const SmallProfileImage = styled.img`
width: 40px;
height: 40px;
padding-left: 15px;
padding-right: 10px;
`
const WelcomeMessage = styled.p`
font-weight: bold;
 font-size: 28 px;
  text-align: left;
   margin: 3px;
    padding: '0';
`



const UserMiniCard = (props) => {
    return (
            <FlexDiv>
          {(props.user) && <SmallProfileImage src={props.user.photoURL} />} 
          
          <div style={{ display: 'block', margin: '0', padding: '0', paddingLeft: '5px' }}> 
          <WelcomeMessage>Welcome, {props.user.displayName}!</WelcomeMessage>
          <p style={{color: 'grey', fontSize: '12px'}}>The Weather is Partly Cloudy today.</p> 
          </div>
        </FlexDiv>
    );
};

export default UserMiniCard;