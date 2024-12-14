import React, { useContext, useState } from 'react'
import  logo from '../assets/logo.png'
import  profile from '../assets/profile.png'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AppContext } from '../context/Appcontext';

const Navbar = () => {

  const navigate= useNavigate();

  const{token,setToken} = useContext(AppContext)
  const [showMenu, setShowMenu]= useState(false);

  const logout = () =>{
    setToken(falsex``)
    localStorage.removeItem('token')
  }


  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 shadow-sm ">
      <img onClick={() => navigate("/")} className="w-20 h-auto cursor-pointer" src={logo} alt="" />

    <ul className="hidden md:flex items-center space-x-14 list-none text-lg">
      <NavLink to="/"><li className="py-1 hover:text-primary transform hover:scale-x-110 duration-300 font-semibold">Home</li></NavLink>
      <NavLink to="/doctors"><li className="py-1 hover:text-primary transform hover:scale-x-110 duration-300 font- font-semibold">All Doctors</li></NavLink>
      <NavLink to="/about">< li className="py-1 hover:text-primary transform hover:scale-x-110 duration-300 font- font-semibold">About Us</li></NavLink>
      <NavLink to="/contact"><li className="py-1 hover:text-primary transform hover:scale-x-110 duration-300 font- font-semibold">Contact</li></NavLink>
      <NavLink to="/HealthPackages"><li className="py-1 hover:text-primary transform hover:scale-x-110 duration-300 font- font-semibold">HealthPackages</li></NavLink>

    </ul>
    <div className='flex items-center gap-4'>
      {
        token 
        ? <div className='flex items-center gap-2 cursor-pointer group relative'>
          <img className='w-10 rounded-full' src={profile} alt="" />

          <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
            <div className='min-w-48 bg-stone-100 rounded  flex flex-col gap-4  p-4'>

            <p onClick={()=> navigate('/my-profile')} className='hover:text-primary cursor-pointer '>My Profile</p>
            <hr className="border-t-1 border-gray-500 w-full mt-2" />
            <p onClick={()=> navigate('/my-appointments')} className='hover:text-primary cursor-pointer '>My Appointments</p>
            <hr className="border-t-1 border-gray-500 w-full mt-2" />
            <p onClick={logout} className='hover:text-primary cursor-pointer '>Logout</p>
              
            </div>
          </div>
          
        </div>
        :      <button onClick={()=> navigate('/login')}  className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Login</button>

      }
    </div>
    </div>
  )
}

export default Navbar
