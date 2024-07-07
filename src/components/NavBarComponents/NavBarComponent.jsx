import React from 'react'
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import useCollectionItems from '../../hooks/useCollectionItems';


const NavBarComponent = () => {
  const {items}=useCollectionItems("Categories")
  return (
    <Navbar expand="lg"  data-bs-theme="dark" className="menu bg-body-tertiary ">
    <Container>
      <Navbar.Brand ><Link to="/"><img className="logo" src="../src/assets/logonom.png" alt="" /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
         <NavDropdown title="CATÁLOGO" id="basic-nav-dropdown">
              {items.map((category)=>{
              return(
                <NavDropdown.Item key={category.slug} >
                <Link to={`/category/${category.slug}`} className='dropItem'>{category.name} </Link>
              </NavDropdown.Item>
              )}
              )}
              
          </NavDropdown>
      
        </Nav>
      </Navbar.Collapse>
      <Link to={`/checkout`} className='dropItem'>  <CartWidgetComponent/> </Link>
    </Container>
  </Navbar>
  )
}

export default NavBarComponent
