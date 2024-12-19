import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <div className='bg-gradient-to-r from-[#1B1B1D] via-[#272730] to-[#6E2B4E] text-white sticky top-0 z-50 backdrop-blur opacity-70'>
            <div className="navbar max-w-screen-xl mx-auto">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-10">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;