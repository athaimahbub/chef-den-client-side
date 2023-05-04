/* eslint-disable no-unused-vars,react/jsx-no-undef */

import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
// import LoginLayout from "../layouts/LoginLayout";
// import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    // {
    //     path:'/',
    //     element: <LoginLayout></LoginLayout>,
    //     children:[
    //         {
    //             path:'login',
    //             element: <Login></Login>
    //         },
    //         // {
    //         //     path:'register',
    //         //     element: <Register></Register>
    //         // }
    //     ]
    // },
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            
        ]
    }
])

export default router;