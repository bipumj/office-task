import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firbase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <header className='py-2' sticky='top'>
            <div className='container-fluid'>
                <Navbar expand="lg" >
                    <Container>
                        <Navbar.Brand as={Link} to={'/'} className='fw-bold fs-4 text-black'>The Postman24</Navbar.Brand>
                        <input type="Search" className='me-5' placeholder="Search.." />
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={CustomLink} to={'/'} className='me-3 fw-bolder'>Home</Nav.Link>
                                <Nav.Link as={CustomLink} to={'/browse-events'} className='me-3 fw-bolder'>Browse Events</Nav.Link>
                                <Nav.Link as={CustomLink} to={'/about'} className='fw-bolder me-3'>Organize</Nav.Link>
                                <Nav.Link as={CustomLink} to={'/checkout'} className='me-3 fw-bolder'>Help</Nav.Link>
                                {user?.uid ?
                                    <Nav.Link as={Link} to={'#'} className=' fw-bolder' onClick={handleSignOut}>Sign Out </Nav.Link>
                                    :
                                    <Nav.Link as={CustomLink} to={'/login'} className=' fw-bolder'>Login</Nav.Link>
                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>

    );
};

export default Header;