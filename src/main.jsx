import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home';
import Errorpage from './components/Errorpage/Errorpage';
import Login from './components/Lock/Login/Login';
import Register from './components/Lock/Register/Register';
import Servicedetails from './components/Home/Service/Servicedetails';
import Service from './components/Home/Service/Service';
import Checkout from './components/Home/Service/Checkout/Checkout';
import Booking from './components/Booking/Booking';
import Private from './components/Private/Private';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Errorpage></Errorpage>,
    children:[
       {
        index:true,
        element:<Home></Home>,
       },{
        path:'/login',
        element:<Login></Login>
       },{
        path:'/register',
        element:<Register></Register>
       },{
        path:'/service',
        element:<Private><Service></Service></Private>,
       },{
        path:'/servicedis/:id',
        element:<Servicedetails></Servicedetails>
       },{
        path:'/checkout',
        element:<Checkout></Checkout>
       },{
        path:'/bookings',
        element:<Private><Booking></Booking></Private>,
       }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
