import React from 'react';
import { width } from 'window-size';
import './user.css';

const User = (props) => {
    const style = {
        hieght: '300px',
        border: '1px solid black'
    }
    return(
        <div style={style} className='user'>
            <div className="user__img"></div>
            <div>
                <h1>{props.user.name}</h1>
                <p>{props.user.state}</p>
                <p>{props.user.phoneNumber}</p>
                <ul>
                    <li>{props.user.flyingStyle[0]}</li>
                </ul>
            </div>
        </div>
    )
}
export default User;