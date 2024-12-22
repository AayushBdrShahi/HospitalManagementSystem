import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { doctors } from '../assets/assets';
import { useAppContext } from '../context/Appcontext';

const TopDoctors = () => {
    const navigate = useNavigate();
    const {doctors} = useAppContext()
  return (
    <div className='flex flex-col items-center gap-10 my-16 md:mx-10 text-gray-800'>
        <h1 className='text-4xl font-bold'> Our Doctors</h1>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-5 gap-y-6 px-4 sm:px-0'>
            {doctors.slice(0,10).map((item,index) =>(
                <div onClick={()=>navigate(`/appointments/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 'key={index}>
                    <img className='bg-blue-50 w-full h-59 rounded-t-lg' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>             
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-700 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=> {navigate('/doctors');scrollTo(0,0)}} className='bg-blue-500 text-black px-10 py-3 hover:bg-blue-600 hover:to-blue-700 transition rounded-full mt-10'>More Doctors</button>
      
    </div>
  )
}

export default TopDoctors

