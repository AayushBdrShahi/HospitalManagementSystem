import React from 'react'
import  {FaUserCircle} from 'react-icons/fa'

const Testimonial = () => {
  return (
    <div className='py-20 text-xs sm:text-sm'>
      <h1 className='text-center py-8 text-4xl font-bold'>Message From Patients</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 text-center'>

        {/* Easy to Use */}
        <div className="flex flex-col items-center p-8 rounded-lg border-2 border-white bg-white shadow-md transition-transform duration-400 cursor-pointer hover:shadow-lg transform hover:scale-105">
          <FaUserCircle className="text-5xl text-blue-600 mb-4" />
          <p className="text-lg font-medium text-gray-800">
            "Booking my appointment was a breeze! The interface is user-friendly, and I was able to choose my preferred doctor and time slot within minutes. Highly recommend!"
          </p>
          <p className="text-gray-600 mt-2">— Sarah T.</p>
        </div>

        {/*Time-Saving */}
        <div className="flex flex-col items-center p-8 rounded-lg border-2 border-white bg-white shadow-md transition-transform duration-400 cursor-pointer hover:shadow-lg transform hover:scale-105">
          <FaUserCircle className="text-5xl text-blue-600 mb-4" />
          <p className="text-lg font-medium text-gray-800">
            "This service has saved me so much time! I can now book my appointments from home without waiting on the phone."
          </p>
          <p className="text-gray-600 mt-2">— Sophia H.</p>
        </div>

        {/*Overall Satisfaction */}
        <div className="flex flex-col items-center p-8 rounded-lg border-2 border-white bg-white shadow-md transition-transform duration-400 cursor-pointer hover:shadow-lg transform hover:scale-105">
          <FaUserCircle className="text-5xl text-blue-600 mb-4" />
          <p className="text-lg font-medium text-gray-800">
            "I am extremely satisfied with my experience using the hospital doctor booking system. It has made managing my health so much easier!"
          </p>
          <p className="text-gray-600 mt-2">— Noah B.</p>
        </div>

         {/* Wide Range of Specialists */}
         <div className="flex flex-col items-center p-8 rounded-lg border-2 border-white bg-white shadow-md transition-transform duration-400 cursor-pointer hover:shadow-lg transform hover:scale-105">
          <FaUserCircle className="text-5xl text-blue-600 mb-4" />
          <p className="text-lg font-medium text-gray-800">
            "The platform offers a wide range of specialists, making it easy for me to find exactly the care I need. I was able to book a consultation with an excellent cardiologist."
          </p>
          <p className="text-gray-600 mt-2">— Emma S.</p>
        </div>

      </div>
    </div>
  )
}

export default Testimonial
