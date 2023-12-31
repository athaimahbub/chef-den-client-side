/* eslint-disable no-unused-vars,react/no-unescaped-entities,no-undef, react/jsx-no-undef*/

import React from 'react';

import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <Login></Login>
            
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;