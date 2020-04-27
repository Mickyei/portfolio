import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './contents/Home';
import { push as Menu } from 'react-burger-menu'
import About from './contents/About';
import Resume from './contents/Resume';
import Contact from './contents/Contact';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
 
  

  render() {
    return (

      <div className="App">
        <Navbar collapseOnSelect sticky="top" expand="lg" className="navbar2" variant="dark">
          <Navbar.Brand href="#home" className="nav-title" >Micky Kyei</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-links justify-content-end">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div>
          <Home />
          <About />
          <Resume />
          <Contact />
        </div>
      </div>

    )
  }
}

export default App;
