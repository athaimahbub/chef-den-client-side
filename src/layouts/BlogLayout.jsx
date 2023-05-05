/* eslint-disable no-unused-vars,react/no-unescaped-entities */

import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';

const BlogLayout = () => {
    return (
        <div>
            <Header></Header>
            <h4 className=' fst-italic ms-4 mt-5 text-primary'>i.Tell us the differences between uncontrolled and controlled components.</h4>
            <p className='text-secondary fs-bold fst-italic ms-5'>
            Uncontrolled components rely on the browser's internal state management, accessed through the HTML DOM. They are easy to set up and require less code, making them convenient for simple use cases. However, controlled components have their state managed explicitly by the application using component-level state variables. They offer more control and flexibility over the component's behavior and are suitable for complex scenarios. Controlled components make it easier to perform actions like validation, synchronization, and modifying the state before updating the UI. The choice between uncontrolled and controlled components depends on the application's requirements and the desired level of control over the component's state and behavior.
            </p>

            <h4 className=' fst-italic ms-4 text-primary'>ii.How to validate React props using PropTypes</h4>
            <p className='text-secondary fst-italic ms-5'>
            In React, we can validate the props passed to a component using PropTypes. PropTypes is a library that allows us to define the expected types and shape of props. To validate props using PropTypes, we need to import the library and specify the expected types for each prop in the component's propTypes object. For example, we can define a prop called name as a required string by using PropTypes.string.isRequired. If the prop doesn't match the specified type or is missing, React will log a warning in the console. PropTypes also provides various validators for different types, such as arrays, objects, numbers, and more. By using PropTypes, we can ensure that the props passed to our React components adhere to the expected types and catch any potential issues during development.
            </p>

            <h4 className='text-primary fst-italic ms-4 '>iii.Tell us the difference between nodejs and express js. controlled components.</h4>
            <p className='fs-bold text-secondary fst-italic ms-5'>
            Node.js is a runtime environment that allows executing JavaScript code outside of a web browser. It provides a server-side platform for building scalable and high-performance applications using JavaScript. Node.js offers a rich set of features and APIs for file system operations, networking, and event-driven programming.

Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a streamlined and minimalist approach to building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, and middleware integration. It offers a robust set of features and extensions, making it popular for creating web servers and RESTful APIs quickly.
 Node.js is a JavaScript runtime environment, while Express.js is a web application framework that runs on top of Node.js, providing additional tools and features for building web applications and APIs.
            </p>

            <h4 className='text-primary fst-italic ms-4 '>iv.What is a custom hook, and why will you create a custom hook?</h4>
            <p className='fs-bold text-secondary fst-italic ms-5 mb-5'>
            A custom hook in React is a reusable function that encapsulates logic and can be shared across components. It allows you to extract and reuse stateful or side-effect related code, promoting code reusability and better organization. Custom hooks are created to abstract complex logic, provide a simplified interface for common tasks, and enable composition of multiple hooks. They enhance code readability, maintainability, and testability. By creating custom hooks, you can centralize and reuse logic, resulting in cleaner and more concise components, as well as promoting efficient sharing of logic across your React application.
            </p>


            <Footer></Footer>
        </div>
    );
};

export default BlogLayout;