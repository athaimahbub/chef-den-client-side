/* eslint-disable no-unused-vars,react/no-unescaped-entities,no-undef, react/jsx-no-undef*/

import React from 'react';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;