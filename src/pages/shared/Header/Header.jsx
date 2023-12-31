/* eslint-disable no-unused-vars,react/no-unescaped-entities,no-undef */

import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import {AuthContext} from '../../../provider/AuthProvider';

const Header = () => {

  // const {user} = useContext(AuthConText);
    const [isSignedIn, setIsSignedIn] = useState(false);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/" className='fs-3 fw-bold fst-italic text-primary'>Bangalee CHEF's DEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className='text-primary'>
              <Link to={"/"} className='text-decoration-none'>  Home</Link>  
              </Nav.Link>
            <Nav.Link href="/blog" className='text-primary'>
            <Link to={"/blog"} className='text-decoration-none'>  Blog</Link>
              </Nav.Link>

              {/* <Nav.Link href="/blog" className='text-primary'>
                     {user.displayName}
              </Nav.Link> */}

               {isSignedIn ? <Nav.Link href="/blog" className='text-primary'><img src="user-profile-picture.jpg" alt="" /></Nav.Link> : <Button variant="primary">
               <Link to={"/login"} className='text-decoration-none text-white'>Login</Link>
                </Button> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;