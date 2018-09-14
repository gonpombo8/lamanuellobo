import React from 'react';
import { Link } from 'react-router'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavbarIndex = () => {
  return (
    <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
              <a href="#">La Manuel Lobo</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}><Link to="/">Inicio</Link></NavItem>
            <NavItem eventKey={4}><Link to="/gallery">Galería</Link></NavItem>
            <NavItem eventKey={6}><Link to="/contact">Contacto</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
};

export default NavbarIndex;
//            <NavItem eventKey={4}>Barrio Histórico</NavItem>
