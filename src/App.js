import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './contents/Home';
import { push as Menu } from 'react-burger-menu'
import About from './contents/About';
import Resume from './contents/Resume';
import Contact from './contents/Contact';



class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  //Close the menu after item click
  closeMenu () {
    this.setState({menuOpen: false})
  }
  
  render() {
  return (
    <Router>
      <div className="App">
{/* <Navbar collapseOnSelect sticky="top" expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home" className="nav-title" >Kotitreenaajan Käsikirja</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end nav-links">
          <Nav.Link href="#laihtuminen">Laihtuminen</Nav.Link>
          <Nav.Link href="#treenit">Treenit</Nav.Link>
          <Nav.Link href="#kysytyt">Usein Kysytyt</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar> */}


        <Menu className="nav2" isOpen={this.state.menuOpen}  onStateChange={(state) => this.handleStateChange(state)} >
          <div className="nameplate">
            <h2 >Micky Kyei</h2>
          </div>
          <Link to="/" id="home" className="menu-item" onClick={() => this.closeMenu()} >Home</Link>
          <Link to="/about" id="about" className="menu-item" onClick={() => this.closeMenu()} >About Me</Link>
          <Link to="/resume" id="resume" className="menu-item" onClick={() => this.closeMenu()} >Resume</Link>
          <Link to="/contact" id="contact" className="menu-item" onClick={() => this.closeMenu()} >Contact</Link>
        </Menu>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/resume">
          <Resume />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
  )
  }
}

export default App;
