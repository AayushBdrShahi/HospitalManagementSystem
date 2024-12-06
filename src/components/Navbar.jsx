import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 shadow-sm ">

    <ul className="hidden md:flex items-center space-x-14 list-none text-lg">
      <NavLink to="/"><li className="py-1 hover:text-primary transform hover:scale-x-110 duration-300">Home</li></NavLink>
      <NavLink to="/doctors"><li className="py-1 hover:text-primary transform hover:scale-x-110 duration-300">All Doctors</li></NavLink>
      <NavLink to="/about">< li className="py-1 hover:text-primary transform hover:scale-x-110 duration-300">About</li></NavLink>
      <NavLink to="/contact"><li className="py-1 hover:text-primary transform hover:scale-x-110 duration-300">Contact</li></NavLink>
    </ul>
    
    </div>
  )
}

export default Navbar
