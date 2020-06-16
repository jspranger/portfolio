// External imports
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Local component imports
import '@utils/navigationbar/styles.scss';

const navLinkSelected = (eventKey: any, e: any) => {
  e.preventDefault();

  const element = document.getElementById(eventKey);
  if (element !== null) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const NavigationBar = (): JSX.Element => {
  return (
    <Navbar collapseOnSelect expand="md" bg="invisible" variant="light">
      <Navbar.Toggle
        className="ml-auto"
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="academic" onSelect={navLinkSelected}>
            Academia
          </Nav.Link>
          <Nav.Link href="experience" onSelect={navLinkSelected}>
            Experience
          </Nav.Link>
          <Nav.Link href="interest" onSelect={navLinkSelected}>
            Interests
          </Nav.Link>
          <Nav.Link href="contact" onSelect={navLinkSelected}>
            Contacts
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
