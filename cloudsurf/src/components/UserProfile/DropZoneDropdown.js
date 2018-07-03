import React, { Component } from 'react';
import firebase from '../../firebase';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class DropZoneDropdown extends Component {
  constructor(props){
    super(props)
    this.state = {
      dropzones : null,
      filteredDropZones: null,
      userEnteredDropZone: '',
    }
  }
  
  componentDidMount(){
    //Get all Dropzones and set to state
    this.repopulateState()
  }

  repopulateState = () => {
    let dzRef = firebase.database().ref('dropzones');
    dzRef.on('value', snapshot => {
      let dropzones = Object.entries(snapshot.val())
      this.setState({ dropzones })
      this.setState({ filteredDropZones:dropzones })
    }); 
  }

  onChangeEnterDropZone = (e) =>{
    console.log(e.target.value)
    let enteredValue = e.target.value
    this.setState({userEnteredDropZone:enteredValue})

    let currentDropZones = this.state.dropzones.slice();
    let filteredDropZones = currentDropZones.filter( dz => dz[1].name.includes(enteredValue))
    this.setState({filteredDropZones})
  }

  render() {
    return (
      <div>
        <Form>
        <FormGroup tag="fieldset">
          <legend>Select your flying style</legend>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="radio1" />{' '}
              Acro
            </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
              <Input type="checkbox" name="radio1" />{' '}
              Perf
            </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
              <Input type="checkbox" name="radio1" />{' '}
              Flock
            </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
              <Input type="checkbox" name="radio1" />{' '}
              XRW
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="dropzoneSel">Select your Drop Zone!</Label>
          <Input onChange={this.onChangeEnterDropZone} type="text" name="dropzone" id="dropzoneSel" placeholder="" value={this.state.userEnteredDropZone}/>
        </FormGroup>
        <FormGroup>
          <Label for="selectDropZones">Select Drop Zone</Label>
          <Input type="select" name="selectDZs" id="selectDropZones" multiple>
          {(this.state.filteredDropZones) ? this.state.filteredDropZones.map( dz => <option key={Math.random()}>{dz[1].name}</option>): ''}
          </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </div>
    );
  }
}

export default DropZoneDropdown;