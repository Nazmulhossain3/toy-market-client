import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../component/Provider/AuthProvider';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogout = () => {
    logOut()
  }


    return (
    <div className="navbar bg-orange-50 rounded-lg">
  <div className="navbar-start">
  
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       <Link to='/'>Home</Link>
       <Link to='/allToys'>All Toy</Link>
      <Link to='/myToys'>My Toys</Link>
       <Link to='/addToy'>Add Toy</Link>
      <Link to='/blog'>Blogs</Link>
     
     
       
      </div>
    </div>
    <div className='flex items-center gap-2 ml-4'>
    <img className='w-10 h-10 rounded-full' src="https://i.ibb.co/C9ZyF05/toy.jpg" alt="" />
    <p className='text-orange-600 text-xl'>ToyHaven.com</p>

    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <div  className="gap-4 menu menu-horizontal px-1">
      <NavLink to='/' className={({ isActive}) =>isActive ? "text-orange-600" : ""} >Home</NavLink>
       <NavLink to='/allToys' className={({ isActive}) =>isActive ? "text-orange-600" : ""} >All Toy</NavLink>
      {
        user && 
        <div className='flex gap-2'>
          <NavLink to='/myToys' className={({ isActive}) =>isActive ? "text-orange-600" : ""}>My Toys</NavLink>
       <NavLink  to='/addToy' className={({ isActive}) =>isActive ? "text-orange-600" : ""}>Add Toy</NavLink>
        </div>
      }
      <NavLink to='/blog'className={({ isActive}) =>isActive ? "text-orange-600" : ""} >Blogs</NavLink>
      <NavLink onClick={handleLogout} to='/login'className={({ isActive}) =>isActive ? "text-orange-600" : ""} >Logout</NavLink>
     
    </div>
  </div>
  <div className="navbar-end mr-6">

  {user ? 
              <div className="w-10 rounded-full">
                <img
                  title={user.displayName}
                  className="rounded-full"
                  src={user?.photoURL}
                />
              </div>
             : 
             <Link to='/login'> <button className="btn btn-sm btn-outline btn-warning">Login</button>
             </Link>
            }
  
  
  
  
  
   
  </div>
</div>
    );
};

export default Navbar;