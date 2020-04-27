import React, { Component } from 'react';

import profilepic from '../img/micky_circle.png';



class Home extends Component {
    render() {
        return (
            <div className="condiv home" id="home">
                <img src={profilepic} alt="Hello" className="profilepic"></img>
                <h2>Hi! My name is Micky Kyei and I'm a Javascript/Java developer.</h2>
                <h2>I am also a...</h2>
                
              
            </div>
            
            //Maybe add social media links here?
        )
    }
}
export default Home;