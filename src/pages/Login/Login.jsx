/* eslint-disable no-unused-vars,react/no-unescaped-entities,no-undef,react/jsx-no-comment-textnodes */

import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
   
    
      const handleGoogleSignIn = () => {
        // Handle Google Sign-in
      };
    
      const handleGitHubSignIn = () => {
        // Handle GitHub Sign-in
      };
    
      return (
        <Container className='w-25 mx-auto mb-5 mt-5'>
            <h3>Please Login</h3>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit" className='mb-3'>
                    Login
                </Button>
                <div>
             <Button className='me-3' variant="primary" onClick={handleGoogleSignIn}>Google Sign-in</Button>
             <Button variant="secondary" onClick={handleGitHubSignIn}>GitHub Sign-in</Button>
           </div>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
   
      );
};

export default Login;