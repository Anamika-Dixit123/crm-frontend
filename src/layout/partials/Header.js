import React from 'react'
import {Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";

const Header = () => {
const navigate = useNavigate();

    const LogOut = ()=>{
        navigate('/');
    }
  return (
    <Navbar collapseOnSelect bg='info' variant='dark' expand='md'>
        <Navbar.Brand>
            logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
                <LinkContainer to='/dashboardpage'>
                    <Nav.Link>Dashboard</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/ticketlist'>
                    <Nav.Link>Tickets</Nav.Link>
                </LinkContainer>
                
                    <Nav.Link onClick={LogOut}>Logout</Nav.Link>
                
            </Nav>
        </Navbar.Collapse>
     </Navbar>
  )
}

export default Header
