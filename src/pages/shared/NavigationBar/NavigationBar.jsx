/* eslint-disable no-unused-vars,react/no-unescaped-entities,no-undef,react/jsx-no-undef */
import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <Container>
        <Navbar.Brand href="/" className='fw-bold fst-italic text-primary'>CHEF's DEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className='text-primary'>Home</Nav.Link>
            <Nav.Link href="/blog" className='text-primary'>Blog</Nav.Link>
            <Nav>
            {user ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
            </Nav>
               
          </Nav>
        </Navbar.Collapse>
      </Container>
    );
};

export default NavigationBar;