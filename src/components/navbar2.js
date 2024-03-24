import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Carousel } from 'react-bootstrap';
import carouselImage1 from './Images/d9b96ff6149b3fb4ce4816e55ad77d93.jpg'

export default function CustomNavbar() {
  return (
    <div>
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Walker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#home">Home</NavDropdown.Item>
                <NavDropdown.Item href="#about">About</NavDropdown.Item>
                <NavDropdown.Item href="#features">Features</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/path/to/your/image2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items as needed */}
      </Carousel>
    </div>
  );
}
