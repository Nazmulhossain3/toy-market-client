import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import Footer from './Pages/Footer';

const Main = () => {
    return (
        <div className='px-8 shadow-2xl'>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;