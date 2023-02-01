import React from "react";
import './Navegation.css';
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../images/logo-shipo.svg';

export default function Navegation(){
 /*  const categories=[
    {url:"/", name:"Inicio"},
    {url:'/list',name:"Personajes"}
]; */
  return(
    <>
      <Navbar key={'xxl'} expand={'xxl'} className="mb-3 barraNav">
        <Container fluid>
          <Link to='/'>
            <Navbar.Brand><img src={Logo} alt='logo de Shipo' className="logo"/></Navbar.Brand>
          </Link>  
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'xxl'}`} variant="light" />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'xxl'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'xxl'}`}
            placement="end"
            className='barraNavDerecha'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'xxl'}`}>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <h3 className="tituloNav">Servicios</h3>
                <NavDropdown
                  title="Masajes"
                  id={`offcanvasNavbarDropdown-expand-${'xxl'}`}
                  className='link'
                  bg='dark'
                >
                  <NavDropdown.Item >
                    <NavLink to="/masajes/descontracturantes" className='linkBlanco'>Masajes descontracturantes</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                    <NavLink to='/masajes/piedras_calientes' className='linkBlanco'>Masajes descontracturantes + piedras calientes</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                    <NavLink to='/masajes/maderoterapia' className='linkBlanco'>Masajes con maderoterapia</NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Electrodos"
                  id={`offcanvasNavbarDropdown-expand-${'xxl'}`}
                  className='link'
                >
                  <NavDropdown.Item>
                    <NavLink to='/electrodos/sesiones' className='linkBlanco'>Sesiones de electrodos</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to='/electrodos/levantamiento_de_gluteos' className='linkBlanco'>Levantamiento de glúteos + electrodos</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to='/electrodos/reductores' className='linkBlanco'>Masajes reductores + electrodos</NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavLink to='/drenaje_linfatico' className='link'>Drenaje Linfático</NavLink>
                <NavLink to='/belleza_manos_pies' className='link'>Belleza de manos y pies</NavLink>
                <NavLink to='/esmalte_semipermanente' className='link'>Esmalte semipermanente</NavLink>
                <NavLink to='/depilacion_laser_definitiva' className='link'>Depilación láser definitiva</NavLink>
                <NavDropdown.Divider/>
                <NavLink className='linkBlanco'>Ubicación</NavLink>
              </Nav>  
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}