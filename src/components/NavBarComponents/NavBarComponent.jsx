import React from 'react'
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="menu bg-body-tertiary ">
    <Container>
      <Navbar.Brand href="#home"><img className="logo" src="../src/assets/logonom.png" alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className='menuLinks'>CATÁLOGO</Nav.Link>
          <Nav.Link href="#link" className='menuLinks'>ACERCA DE NOSOTROS</Nav.Link>
          <Nav.Link href="#link" className='menuLinks'>CONTACTO</Nav.Link>
          <Nav.Link href="#link" className='menuLinks'>UBICACIÓN</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <CartWidgetComponent/>
    </Container>
  </Navbar>
  )
}

export default NavBarComponent
