import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
            <div className="condiv resume" id="resume">

                <div className="experience resume-column">
                <h2>Work Experience</h2>
                <h3>IT Local Support, Neste Engineering Solutions</h3>
                <p>I ensured end-user satisfaction and eﬀective running of IT systems by troubleshooting and solving hardware and software related problems.
                     On top of daily service issues I also supported in operation system migration.</p>

                <h3>Web Developer, Deutscher Tele Markt GmbH </h3>
                <p>Internship abroad in Dresden. Tasks included building web pages using HTLM/CSS and Javascript. In addition,
                     helped design and build an mobile app using Ionic.</p>

                <h2 className="profile">Profile</h2>
                <p>I'm a 27-year-old Bachelor of Business Information Systems, who is looking to pursue a career as a developer. I believe my previous 
                    experiences as a professional athlete have helped me become a great team player who is always eager to help. I have also learned the value
                    of hard work. I'm a laid-back person who enjoys socializing. Outside of programming and sports my interest are comedy and music.
                </p>
                </div>

                <div className="skills resume-column">
                    <h2>Skills</h2>
                    <h3>Javascript ★★★★☆</h3>
                    <h3>Java ★★★☆☆</h3>
                    <h3>Angular ★★★★☆</h3>
                    <h3>React ★★★★☆</h3>
                    <h3>Ionic ★★★★☆</h3>
                    <h3>Node.js ★★★☆☆</h3>
                    <h3>Android Studio ★★★☆☆</h3>
                    <h3>MySQL ★★★☆☆</h3>
                    <h3>C++ ★☆☆☆☆</h3>
                    <h3>MondoDB ★☆☆☆☆</h3>
                </div>
               

                     
            </div>
            
            //Maybe add social media links here?
        )
    }
}
export default Resume;