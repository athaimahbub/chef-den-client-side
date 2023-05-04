// /* eslint-disable no-unused-vars,react/no-unescaped-entities,no-undef */

// import React, { useContext, useState } from 'react';
// import { Button, Container, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../provider/AuthProvider';

// const Register = () => {
//     const { createUser } = useContext(AuthContext);
//     const [error, setError] = useState("");

//     const handleRegister = event => {
//         event.preventDefault();
//         const form = event.target;
//         const name = form.name.value;
//         const photo = form.photo.value;
//         const email = form.email.value;
//         const password = form.password.value;

//         // console.log(name, photo, email, password)
//         if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
//             setError("password not valid. Need 6 character at least ");
//             return;
//           }
//         if((email,password)){
//             createUser(email, password)
//             .then(result => {
//                 const createdUser = result.user;
//                 console.log(createdUser);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//         }
        
//     };


//     return (
//         <Container className='w-25 mx-auto'>
//             <h3>Please Register</h3>
//             <Form onSubmit={handleRegister}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control type="text" name='name' placeholder="Your Name" required />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Photo URL</Form.Label>
//                     <Form.Control type="text" name='photo' placeholder="Photo URL" required />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" name='email' placeholder="Enter email" required />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" name='password' placeholder="Password" required />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                     <Form.Check
//                         onClick={handleAccepted}
//                         type="checkbox"
//                         name="accept"
//                         label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
//                 </Form.Group>
//                 <Button variant="primary" disabled={!accepted} type="submit">
//                     Register
//                 </Button>
//                 <br />
//                 <Form.Text className="text-secondary">
//                     Already Have an Account? <Link to="/login">Login</Link>
//                 </Form.Text>
//                 <Form.Text className="text-success">

//                 </Form.Text>
//                 <Form.Text className="text-danger">

//                 </Form.Text>
//             </Form>
//         </Container>
//     );
// };

// export default Register;