import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Mainlayout from './Layouts/Mainlayout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Addproduct from './Pages/Addproduct';
import Updateproduct from './Pages/Updateproduct';
import Mycart from './Pages/Mycart';
import Product from './Pages/Product';
import Details from './Pages/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout></Mainlayout>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/addproduct',
      element:<Addproduct></Addproduct>
    },
    {
      path:'/updateproduct',
      element:<Updateproduct></Updateproduct>
    },
    {
      path:'/mycart',
      element:<Mycart></Mycart>
    },
    {
      path:'/product',
      element:<Product></Product>

    },
    {
      path:'/details',
      element:<Details></Details>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
