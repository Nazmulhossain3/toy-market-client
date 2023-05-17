import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar';

const Main = () => {
    return (
        <div className='px-8'>
            <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;