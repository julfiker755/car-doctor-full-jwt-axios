import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillShopping } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import logo from '../../assets/logo.svg'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase';
// /bookings
const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const navber = <>
    <li><Link to="/">Home</Link></li>
    <li><Link>About</Link></li>
    <li><Link to="/service">Services</Link></li>
    <li><Link>Blog</Link></li>
    <li><Link>Contact</Link></li>
    <li>{user ? <>
      <li><Link to="/bookings">Bookings</Link></li>
      {/* log out assentoken remove */}
      <button onClick={async()=> {
        const sucess=await signOut()
        if(sucess){
          localStorage.removeItem('assentoken')
        }
      }
        } className='text-[#276280] font-semibold'>Logout</button>
    </> :<Link to="/login">Login</Link> }</li>
  </>
  return (
   <div className='bg-[#02c390] !text-white sticky top-0 left-0 z-[999999]'>
     <div className="navbar max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {navber}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"><img className='h-[50px] text-white' src={logo} alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navber}
        </ul>
      </div>
      {/* condition */}
      {user ?  <div className="navbar-end space-x-4">
      <div className='flex space-x-2 items-center'>
        <AiFillShopping size={25}/>
        <FiSearch size={25}/>
      </div>
        <a className="btn btn-primary">Appointment</a>
      </div>:null}
     
    </div>
   </div>
  );
};

export default Header;