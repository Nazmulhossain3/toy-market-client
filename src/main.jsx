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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
      },
      {
        path : '/allToys',
        element : <AllToys></AllToys>,
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
      }
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
