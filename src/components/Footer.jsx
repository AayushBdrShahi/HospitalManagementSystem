import React from 'react'

const Footer = () => {
  return (
    <footer className='py-8'>
    <hr className="border-gray-300 w-full border-t-2 mx-auto" style={{ width: "85%" }} />

        < div className='max-w-6xl mx-auto  flex flex-col gap-6'>
    {/* Fotter bottom section */}
    <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
    {/* Comapany and support */}
    <div className='flex gap-12 flex-col md:flex-row w-full'>
        <div className='flex flex-col space-y-2'>
            <h4 className='font-medium text-lg'>Company</h4>
            <p className='cursor-pointer hover:text-gray-600'>Home</p>
            <p className='cursor-pointer hover:text-gray-600'>About us</p>
            <p className='cursor-pointer hover:text-gray-600'>Contact us</p>
        </div>
        
        <div className='flex flex-col space-y-2'>
            <h4 className='font-medium text-lg'>Get in Touch</h4>
            <p className='cursor-pointer hover:text-gray-600'>+977 9840334044</p>
            <p className='cursor-pointer hover:text-gray-600'>healthtime@gmail.com</p>
            <p className='cursor-pointer hover:text-gray-600'>Hattigaunda, KTM</p>
        </div>
    </div>

    {/* Copyright */}

    <div className='md:text-right w-full md:w-auto'>
        <p className='text-gray-800'>© 2023 healthtime.All rights reserved</p>
    </div>
    </div>
    </div>
    </footer>
  )
}

export default Footer
