import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 bg-slate-800 text-lime-300 shadow-lg ">
      {/* Logo */}
      <NavLink to="/" className="text-lg font-bold hover:scale-110 transition-transform duration-300">
        <img src="/images.jpeg" alt="Website Logo" className="h-10 rounded border-2 border-lime-300 ml-10" />
      </NavLink>

      {/* Navigation Links */}
      <div className="flex gap-6">
        <NavLink 
          to="/about" 
          className="relative group transition-colors duration-300 rounded-md px-4 py-2"
        >
          <span className="block hover:text-lime-400">About Us</span>
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-lime-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </NavLink>
        <NavLink 
          to="/services" 
          className="relative group transition-colors duration-300 rounded-md px-4 py-2"
        >
          <span className="block hover:text-lime-400">Services</span>
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-lime-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </NavLink>
        <NavLink 
          to="/contact" 
          className="relative group transition-colors duration-300 rounded-md px-4 py-2"
        >
          <span className="block hover:text-lime-400">Contact Us</span>
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-lime-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
