import React, { Component } from 'react';

import profilepic from '../img/micky_circle.png';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} alt="Hello" className="profilepic"></img>
                <h2>Hi! My name is Micky Kyei and I'm a Javascript/Java developer.</h2>
                <div className="links-container">
                <Link to="/about" className="about-button" >About me</Link>
                <Link to="/resume" className="about-button" >Resume</Link>
                </div>
              
            </div>
            
            //Maybe add social media links here?
        )
    }
}
export default Home;