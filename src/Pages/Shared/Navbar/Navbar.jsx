import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdLogIn } from "react-icons/io";

import { FaUserEdit } from "react-icons/fa";


const Navbar = () => {

    const links = (
        <>
        <NavLink>Home</NavLink>
        <NavLink>Home</NavLink>
        <NavLink>Home</NavLink>
        <NavLink>Home</NavLink>
        <NavLink>Home</NavLink>
        <NavLink>Home</NavLink>
        </>
    )
    return (
        <div className='bg-gradient-to-r from-[#1B1B1D] via-[#272730] to-[#6E2B4E] text-white sticky top-0 z-50 backdrop-blur opacity-85'>
            <div className="navbar max-w-screen-xl mx-auto">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn px-1 btn-ghost text-[#228B22] lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-[#1B3D2F]">
        {links}
      </ul>
    </div>
    <a className="text-sm px-1 md:text-xl btn btn-ghost ">projectName</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-10">
      {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-1 md:gap-2">
    <a className="btn bg-[#228B22] border-none px-2 md:px-4 hover:bg-[#175c17] text-xs md:text-sm text-white"><FaUserEdit />
    Register</a>
    <a className="btn bg-[#228B22] border-none px-2 md:px-6 hover:bg-[#175c17] text-xs md:text-sm text-white"><IoMdLogIn />
    Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;