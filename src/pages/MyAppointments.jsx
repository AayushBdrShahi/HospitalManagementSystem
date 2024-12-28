import React from 'react';
import { useAppContext } from '../context/Appcontext';

const MyAppointments = () => {
  const { doctors } = useAppContext();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        My Appointments
      </h2>
      <div className="space-y-10">
        {doctors.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 flex flex-col lg:flex-row items-center justify-between"
          >
            {/* Doctor Image */}
            <div className="flex-shrink-0 mb-6 lg:mb-0">
              <img
                className="w-36 h-36 object-cover rounded-xl border-2"
                src={item.image}
                alt={item.name}
              />
            </div>

            {/* Appointment Details */}
            <div className="flex-1 lg:ml-8">
              <p className="text-xl font-bold text-gray-800">{item.name}</p>
              <p className="text-md text-gray-600 mt-2">
                <span className="font-medium">Speciality:</span> {item.speciality}
              </p>
              <p className="text-md text-gray-600 mt-2">
                <span className="font-medium">Experience:</span> {item.experience} years
              </p>
              <p className="text-md text-gray-600 mt-2">
                <span className="font-medium">Fees:</span> ${item.fees}
              </p>
              <p className="text-md text-gray-600 mt-4">
                <span className="font-medium">Date & Time:</span> 25, July, 2024 | 8:30 PM
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-4 lg:ml-8">
              <button className="bg-indigo-600 text-white text-md px-6 py-3 rounded-lg hover:bg-indigo-500 transition-all shadow-lg">
                Pay Online
              </button>
              <button className="bg-red-500 text-white text-md px-6 py-3 rounded-lg hover:bg-red-400 transition-all shadow-lg">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
