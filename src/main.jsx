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
import PrivateRoute from './Provider/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [{
      path: '/',
      element: <Home></Home>,
      loader:()=>fetch('/data.json')
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
      element: <PrivateRoute><Addproduct></Addproduct></PrivateRoute>
    },
    {
      path: '/updateproducts/:id',
      element: <PrivateRoute><Updateproduct></Updateproduct></PrivateRoute>,
      loader:({params})=>fetch(`https://automotive-server-ten.vercel.app/products/${params._id}`)
    },
    {
      path: '/mycart',
      element: <PrivateRoute><Mycart></Mycart></PrivateRoute>
     
    },
    {
      path: '/products/:brandname',
      element: <Product></Product>,
      loader:()=>fetch('https://automotive-server-ten.vercel.app/products')

    },
    {
      path: '/details/:id',
      element: <PrivateRoute><Details></Details></PrivateRoute>,
      loader:()=>fetch('https://automotive-server-ten.vercel.app/products')
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
  </React.StrictMode>
)
