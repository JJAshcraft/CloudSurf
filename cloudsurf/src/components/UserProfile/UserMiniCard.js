import React from 'react';
import styled from 'styled-components';

const FlexDiv = styled.div`
 display: 'flex';
 justifyContent: 'space-around'; 
 alignItems: 'center';
 paddingLeft: '5px';
`
const SmallProfileImage = styled.img`
width: 40px;
height: 40px;
padding-left: 15px;
padding-right: 10px;
`



const UserMiniCard = (props) => {
    return (
            <FlexDiv>
          {(props.user) && <SmallProfileImage src={props.user.photoURL} />} 
          
          <div style={{ display: 'block', margin: '0', padding: '0', paddingLeft: '5px' }}> 
          <p style={{fontWeight: 'bold', fontSize: '28 px', textAlign:'left', margin: '3px', padding: '0'}}>
          Welcome, {props.user.displayName}!</p>
          <p style={{color: 'grey', fontSize: '12px'}}>The Weather is Partly Cloudy today.</p> 
          </div>
        </FlexDiv>
    );
};

export default UserMiniCard;