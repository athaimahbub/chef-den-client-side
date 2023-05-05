/* eslint-disable no-unused-vars,react/jsx-no-undef */

import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import RecipeLayout from "../layouts/RecipeLayout";
import Recipe from "../pages/Recipe/Recipe/Recipe";
import BlogLayout from "../layouts/BlogLayout";
import LoginLayout from "../layouts/LoginLayout";
import RegisterLayOut from "../layouts/RegisterLayOut";
// import Home from "../pages/Home";
// import LoginLayout from "../layouts/LoginLayout";
// import Login from "../pages/Login/Login";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        // children: [
        //     {
        //         path:'/category/:id',
        //         element:<Category></Category>,
        //         loader: ({params}) => fetch(`http://localhost:5000/chefBio/${params.id}`)
                
        //     }
        // ]
        
    },
    {
            path:'blog',
            element:<BlogLayout></BlogLayout>
    },
    {
        path:'login',
        element: <LoginLayout></LoginLayout>
    },
    {
        path:'register',
        element: <RegisterLayOut></RegisterLayOut>
    },
    
    {
        path: 'recipe',
        element: <RecipeLayout></RecipeLayout>,
        children:[
            {
                path: ':id',
                element:<Recipe></Recipe>,
                loader: ({params}) => fetch(`http://localhost:5000/chefBio/${params.id}`)
            }
            
        ]
    }
])

export default router;