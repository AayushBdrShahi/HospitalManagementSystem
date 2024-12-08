import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-16 text-gray-800" id="speciality">
      <h1 className="text-4xl font-bold">Departments</h1>

      <div className="flex sm:justify-center gap-6 pt-8 w-full overflow-x-auto">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-sm cursor-pointer flex-shrink-0 p-4 transition-transform duration-300 transform hover:-translate-y-2 w-32 sm:w-40"
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 mb-3 flex items-center justify-center rounded-3xl  border border-primary overflow-hidden"
            >
              <img src={item.image} alt="" className="w-full h-full object-cover" />
            </div>
            <p className="text-center text-gray-950 font-medium">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
