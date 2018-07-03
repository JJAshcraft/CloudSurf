import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const styles = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    height: '400px',
    background: 'cornflowerblue',
    top: '20%',
    left: '30%',
    zIndex: '100',
    overflow: 'scroll'
}


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
z-index: 400;

`
const UserWrapper = styled.div `
position: Absolute;
height: 100%;
`
const UserProfileImage = styled.div`
max-width: 430px;
max-height:300px;
`
const FlexDiv = styled.div`
display:flex;
justify-content: center;
align-items: center;
color: whitesmoke;
`


class UserFullCard extends Component {

    render() {
        return (

<Wrapper>
    
  <div className="image-background">
  <Link style ={{textDecoration: 'none', color:'white', float: 'right', padding: '10px'}} to='/'>CLOSE</Link>
    <FlexDiv><img className='userimage' src={this.props.user.photoURL} /> <h1>User Profile</h1></FlexDiv>

</div>
  <OuterDiv>

    
  <Form>
        <FormGroup>
           <Label for="name">
                    Name</Label>
                    <Input id="name" type="text" value={this.props.user.displayName} />
                
                <Label for="email">
                    Email </Label>
                    <Input id="email" type="email" value={this.props.user.email} />
               
                <Label for="phone">
                    Phone </Label>
                    <Input id="phone" type="phone" name="phone"  />
               
                 </FormGroup>
                  <FormGroup>
                
                <p>Type of flying you do:</p>
                
                <Label for="acrobatics"> 
                 <Input type="checkbox" id="acrobatics" />
                Acrobatics     
                </Label><br/>
              
                <Label for="performance">
                    <Input type="checkbox" id="performance" />
                    Performance
                </Label><br/>

                <Label for="flock">
                    <Input type="checkbox" id="flock" />
                    Flock
                </Label><br/>
                
                <Label for="xrw">
                    <Input type="checkbox" id="xrw" />
                    XRW
                </Label>
                 </FormGroup>
                 <FormGroup>
                
                <p>Suit type:</p>
        
                <Label for="wingsuit-beginner">
                 <Input type="radio" id="wingsuit-beginner" name="1" />
                    Beginner
                </Label><br/>
                <Label for="wingsuit-intermediate">
                 <Input type="radio" id="wingsuit-intermediate" name="2" />
                    Intermediate
                   
                </Label><br/>
                <Label for="wingsuit-advanced">
                  <Input type="radio" id="wingsuit-advanced" name="3" />
                    Advanced
                  
                </Label>
           
                </FormGroup>
                
                 <FormGroup>
        
                <Label for="home-dropzone">
                    Home Dropzone
                    <Input type="text" id="home-dropzone" />
                </Label>
                <Label for="state">
                    State
                    <Input type="text" id="state" />
                </Label>

                 </FormGroup>
                  <FormGroup>
                <p>Are you a coach?</p>
                <Label for="yes-coach">
                 <Input type="radio" id="yes-coach" name="is-coach" />
                    Yes
                   
                </Label><br/>
                <Label for="no-coach">
                  <Input type="radio" id="no-coach" name="is-coach" />
                    No
                </Label>
                 </FormGroup>
                 <button className='btn btn-lg btn-danger  '>Submit</button><br/>
 </Form>
   

</OuterDiv>
  </Wrapper>

                
          
        )
    }
    
}

export default UserFullCard
