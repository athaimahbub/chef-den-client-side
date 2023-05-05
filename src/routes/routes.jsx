/* eslint-disable no-unused-vars,react/jsx-no-undef */

import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import RecipeLayout from "../layouts/RecipeLayout";
import Recipe from "../pages/Recipe/Recipe/Recipe";
import Category from "../pages/Home/Category/Category";
// import Home from "../pages/Home";
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
        // children: [
        //     {
        //         path:'/category/:id',
        //         element:<Category></Category>,
        //         loader: ({params}) => fetch(`http://localhost:5000/chefBio/${params.id}`)
                
        //     }
        // ]
        
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