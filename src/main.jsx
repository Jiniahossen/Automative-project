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
import Errorpage from './Pages/Errorpage';
import Authprovider from './Provider/Authprovider';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path: '/addproducts',
      element: <Addproduct></Addproduct>
    },
    {
      path: '/updateproducts',
      element: <Updateproduct></Updateproduct>
    },
    {
      path: '/mycart',
      element: <Mycart></Mycart>
    },
    {
      path: '/product',
      element: <Product></Product>

    },
    {
      path: '/details',
      element: <Details></Details>
    }
    ]
  },
]);
<div><Toaster/></div>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  </React.StrictMode>,
)
