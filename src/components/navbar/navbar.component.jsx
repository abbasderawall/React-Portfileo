import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../assets/icons/logow.png'
import './navbar.style.css';
 const Mynavbar = () => {
    return (
        <>
            <Navbar
        fixed="top"
        bg="primary"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
         {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> */}
  <Navbar.Brand href="#home">
     <img className='logo' src={logo}  alt='My Porfolio' /> 
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link href="#experience">Experience</Nav.Link>
      <Nav.Link href="#project">Projects</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>

  
    </Nav>
  
  </Navbar.Collapse>
</Navbar>   
        </>
    )
}
export default Mynavbar

