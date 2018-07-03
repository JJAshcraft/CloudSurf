import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import'../App.css';

const LinkHome = styled(Link)`
    position: absolute;
    top: 150px;
    left: 60px;
    background-color: white;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 10px;
`;
const About = () => {
    return (
        <div className='about'>
        <div className="about__text">
        <ul>
            <li className='about__feature'>Features</li>
            <li> Firebase Authorization (Facebook or Google), Hosting </li>
            <li> Firebase Database - persistent data storage any dropzone in the world  </li>
            <li> GitHub project - feature branching and issue tracker  </li>
            <li> Google Maps, Places and Photos </li>
            <li> Working event calendar </li>
            <li> Working event calendar </li>

            <li className='about__feature'>Challenges</li>

            <li> Using Firebase's schema to create a relation using keys rather than a "join" </li>
            <li> Learning how to branch / merge _cohesively_ as a team while minimizing time spent on resolving conflicts </li>
            <li> Users can add their own events </li>
            
        </ul>
        </div>
            <LinkHome to='/'> Home </LinkHome>
        </div>
    )
}
export default About;
