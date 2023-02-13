import React from "react";
import './Navegation.css';
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../images/logo-shipo.svg';
import { useState } from "react";

export default function Navegation(){
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleClose = () => setMenuOpen(false)
  return(
    <>
      <Navbar key={'false'} expand={'false'} className="mb-3 barraNav">
        <Container fluid>
          <Link to='/' className="d-md-block d-lg-none">
            <Navbar.Brand ><img src={Logo} alt='logo de Shipo' className="logo-mobile"/></Navbar.Brand>
          </Link>
          <Link to='/' className="d-none d-lg-block mx-auto">
            <Navbar.Brand ><img src={Logo} alt='logo de Shipo' className="logo-desktop"/></Navbar.Brand>
          </Link>   
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'false'}`} variant="light" onClick={toggleMenu}/>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'false'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'false'}`}
            placement="end"
            className='barraNavDerecha w-auto'
            restoreFocus={false}
            show={menuOpen}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'false'}`}>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="offcanvasBody">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <h3 className="tituloNav">Servicios</h3>
                <NavDropdown
                  title="Masajes"
                  id={`offcanvasNavbarDropdown-expand-${'false'}`}
                  className='linkColor'
                  bg='dark'
                >
                  <NavDropdown.Item >
                    <NavLink onClick={toggleMenu} to="/masajes/descontracturantes" className='linkBlanco'>Masajes <br/>descontracturantes</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                    <NavLink onClick={toggleMenu} to='/masajes/piedras_calientes' className='linkBlanco'>Masajes <br/> descontracturantes<br/> + piedras calientes</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                    <NavLink onClick={toggleMenu} to='/masajes/maderoterapia' className='linkBlanco'>Masajes con <br/>maderoterapia</NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Electrodos"
                  id={`offcanvasNavbarDropdown-expand-${'false'}`}
                  className='linkColor'
                >
                  <NavDropdown.Item>
                    <NavLink onClick={toggleMenu} to='/electrodos/sesiones' className='linkBlanco'>Sesiones de electrodos</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink onClick={toggleMenu} to='/electrodos/levantamiento_de_gluteos' className='linkBlanco'>Levantamiento de <br/>glúteos + electrodos</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink onClick={toggleMenu} to='/electrodos/reductores' className='linkBlanco'>Masajes reductores + <br/>electrodos</NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavLink onClick={toggleMenu} to='/drenaje_linfatico' className='linkColor'>Drenaje Linfático</NavLink>
                <NavLink onClick={toggleMenu} to='/belleza_manos_pies' className='linkColor'>Belleza de manos <br/>y pies</NavLink>
                <NavLink onClick={toggleMenu} to='/esmalte_semipermanente' className='linkColor'>Esmalte <br/>semipermanente</NavLink>
                <NavLink onClick={toggleMenu} to='/depilacion_laser_definitiva' className='linkColor'>Depilación láser <br/>definitiva</NavLink>
                <NavDropdown.Divider/>
                <NavLink onClick={toggleMenu} className='linkUbicacion'>Ubicación</NavLink>
              </Nav>  
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}