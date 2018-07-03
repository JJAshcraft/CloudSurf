import React, { Component } from 'react'

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

class UserFullCard extends Component {

    render() {
        return (
            <div style={styles}>
                <img style={{width: '50px'}} src={this.props.user.photoURL} />
                <label for="name">
                    Name
                    <input id="name" type="text" value={this.props.user.displayName} />
                </label>
                <label for="email">
                    Email
                    <input id="email" type="email" value={this.props.user.email} />
                </label>
                <label for="phone">
                    Phone
                    <input id="phone" type="phone"  />
                </label>
                <p>Type of flying you do:</p>
                <label for="acrobatics">
                    <input type="checkbox" id="acrobatics" />
                    Acrobatics
                </label>
                <label for="performance">
                    <input type="checkbox" id="performance" />
                    Performance
                </label>
                <label for="flock">
                    <input type="checkbox" id="flock" />
                    Flock
                </label>
                <label for="xrw">
                    <input type="checkbox" id="xrw" />
                    XRW
                </label>
                <p>Suit type:</p>
                <label for="wingsuit-beginner">
                    Beginner
                    <input type="radio" id="wingsuit-beginner" name="1" />
                </label>
                <label for="wingsuit-intermediate">
                    Intermediate
                    <input type="radio" id="wingsuit-intermediate" name="2" />
                </label>
                <label for="wingsuit-advanced">
                    Advanced
                    <input type="radio" id="wingsuit-advanced" name="3" />
                </label>
                <label for="no-coach">
                    No
                    <input type="radio" id="no-coach" name="is-coach" />
                </label>
                <label for="home-dropzone">
                    Home Dropzone
                    <input type="text" id="home-dropzone" />
                </label>
                <label for="state">
                    State
                    <input type="text" id="state" />
                </label>
                <p>Are you a coach?</p>
                <label for="yes-coach">
                    Yes
                    <input type="radio" id="yes-coach" name="is-coach" />
                </label>
                <label for="no-coach">
                    No
                    <input type="radio" id="no-coach" name="is-coach" />
                </label>
            </div>
        )
    }
    
}

export default UserFullCard
