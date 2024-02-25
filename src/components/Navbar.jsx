import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>
          <i>𝐛𝐨𝐨𝐤 𝐰𝐨𝐫𝐦𝐬 𝐮𝐧𝐢𝐭𝐞𝐝</i>
          <span style={{ marginLeft: '5px' }}> {/* Adding a small margin to separate the text from the image */}
            <img src="https://i.pinimg.com/originals/2e/e6/2e/2ee62eeaf77b6184289c6338f58779b4.jpg" alt="Tiny Image" height="30" /> {/* Adjust the height as needed */}
          </span>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/photography">
            <Nav.Link>Inspiration</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
