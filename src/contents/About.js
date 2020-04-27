import React, { Component } from 'react';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            StudentActive: false,
            AthleteActive: false,
            AthleteWidth: '50%',
            StudentWidth: '50%',
            AthleteDisplay: 'hidden',
            AthleteText: '0',
            StudentDisplay: 'none',
            StudentText: '0'
        }

    }



    toggleAthlete = (e) => {
        if (this.state.AthleteActive === true && this.state.StudentActive === false) {
            this.setState({
                AthleteWidth: '50%',
                StudentWidth: '50%',
                AthleteActive: false,
                AthleteDisplay: 'hidden',
                AthleteText: '0',
            })
        } else {
            this.setState({
                AthleteWidth: '80%',
                StudentWidth: '20%',
                AthleteActive: true,
                StudentActive: false,
                AthleteDisplay: 'visible',
                AthleteText: '1',
                StudentDisplay: 'hidden',
                StudentText: '0'
            })
        }

    }

    toggleStudent = (e) => {

        if (this.state.AthleteActive === false && this.state.StudentActive === true) {
            this.setState({
                AthleteWidth: '50%',
                StudentWidth: '50%',
                StudentActive: false,
                StudentDisplay: 'none',
                StudentText: '0'
            })
        } else {
            this.setState({
                AthleteWidth: '20%',
                StudentWidth: '80%',
                AthleteActive: false,
                StudentActive: true,
                StudentDisplay: 'inline',
                StudentText: '1',
                AthleteDisplay: 'hidden',
                AthleteText: '0'
            })
        }
    }


    render() {
        return (
            <div className="condiv about" id="about">
                <ul className="panelContainer">
                    <li className="aboutPanel athlete" style={{ width: this.state.AthleteWidth }} onClick={this.toggleAthlete} >
                        <h2>Athlete</h2>
    
                        <ul style={{ visibility: this.state.AthleteDisplay }, {opacity: this.state.AthleteText}} className="aboutList" > 
                            <li>
                                 14 years of American Football
                                
                             </li>
                            <li>
                             4 years of professional American Football (Germany and Finland)
                             </li>
                             <li>
                             Multiple Finnish Junior Championships
                             </li>
                             <li>
                             A German and a Finnish National Champion
                             </li>
                             <li>
                             9 years in the National Team of Finland
                             </li>

                        </ul>
                    </li>
                    <li className="aboutPanel student" style={{ width: this.state.StudentWidth }} onClick={this.toggleStudent} >
                        <h2>Student</h2>
                        <ul style={{ display: this.state.StudentDisplay }, {opacity: this.state.StudentText}} className="aboutList" > 
                            <li>
                                Bachelor of Business Information Systems
                             </li>
                            <li>
                            5 month internship in Dresden, Germany
                             </li>
                             <li>
                            3.6 GPA
                             </li>
                             <li>
                            Best possible grade on thesis (5)
                             </li>
                             
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }

}

export default About;