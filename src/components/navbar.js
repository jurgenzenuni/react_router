import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'rgb(241, 241, 241)' }}>
      <Navbar.Brand href="#home" className="navlink2" style={{ paddingLeft: '7px' }}>
        <i className="ri-contrast-drop-line">
          {" "}
          <span className="Walker"> Walker </span>
        </i>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle">
        <i className="ri-menu-4-fill"></i>
      </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ms-auto navlink">

          <Button variant="primary" className="login-button"
           style={{ marginRight: '10px', backgroundColor: 'white', borderRadius: '0px', borderColor: 'darkgrey',
            color: 'black',}}>
            <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}> login </Link>
          </Button>
          <Button variant="secondary" className="signup-button" style={{ marginRight: '10px', backgroundColor: 'lightgrey', borderRadius: '0px', borderColor: 'darkgrey',
            color: 'black', }}>
            <Link to='/signup' style={{ textDecoration: 'none', color: 'black' }}> Sign Up </Link>
          </Button>

          <Nav.Link href="/about.html" className="about-link" style={{ marginLeft: '0px', marginRight: '20px', paddingLeft: '21px' }}>
            <span> ABOUT </span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default NavBar;