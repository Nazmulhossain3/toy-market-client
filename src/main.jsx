import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './component/Main.jsx';
import Home from './Home/Home/Home';
import AllToys from './component/Pages/AllToys';
import Mytoys from './component/Pages/Mytoys';
import AddToy from './component/AddToy';
import Blogs from './component/Pages/Blogs';
import ErrorPage from './component/Pages/ErrorPage';
import Login from './component/Pages/Login';
import AuthProvider from './component/Provider/AuthProvider';
import Register from './component/Pages/Register';
import Toydetails from './component/Pages/Toydetails';
import UpdateToys from './component/Pages/UpdateToys';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
      },
      {
        path : '/allToys',
        element : <AllToys></AllToys>,
        loader : ()=> fetch('http://localhost:5000/allTeddy')
      },
      {
        path : '/myToys',
        element : <Mytoys></Mytoys>
      },
      {
        path : '/addToy',
        element : <AddToy></AddToy>

      },
      {
        path : '/blog',
        element : <Blogs></Blogs>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/allTeddy/:id',
        element : <Toydetails></Toydetails>,
        loader : ({params})=> fetch(`http://localhost:5000/allTeddy/${params.id}`)
      },

      {
        path : '/myTeddy/:id',
        element : <UpdateToys></UpdateToys>,
        // loader : ({params})=> fetch(`http://localhost:5000/myTeddy/${params.id}`)
      }
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
