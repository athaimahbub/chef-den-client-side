/* eslint-disable no-unused-vars,react/no-unescaped-entities */

import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/" className='fw-bold fst-italic text-primary'>Bangalee CHEF's DEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className='text-primary'>Home</Nav.Link>
            <Nav.Link href="/blog" className='text-primary'>Blog</Nav.Link>
               {isSignedIn ? <Nav.Link href="/blog" className='text-primary'><img src="user-profile-picture.jpg" alt="" /></Nav.Link> : <Button variant="primary">Login</Button> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;