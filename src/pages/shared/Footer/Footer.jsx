/* eslint-disable no-unused-vars,react/no-unescaped-entities */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p>&copy; {new Date().getFullYear()} Chef's Den. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to={"/"} className='text-decoration-none'>Home</Link>
                
              </li>
              <li className="list-inline-item">
               <Link to={"/blog"} className='text-decoration-none'>Blog</Link>
                
              </li>
              <li className="list-inline-item">
              <Link to={"/login"} className='text-decoration-none'>Login</Link>
              </li>
              <li className="list-inline-item">
              <Link to={"/register"} className='text-decoration-none'>Register</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
    );
};

export default Footer;