import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaUserMd, FaFemale, FaBrain, FaStethoscope, FaChild, FaHeartbeat, FaEye } from 'react-icons/fa';
import { useAppContext } from "../context/Appcontext";


const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  
  const {doctors} = useAppContext();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(
        doctors.filter(
          (doc) =>
            doc.speciality.toLowerCase().replace(" ", "_") ===
            speciality.toLowerCase()
        )
      );
    } else {
      setFilterDoc(doctors);
    }
  };
  useEffect(() => {
    console.log("Speciality from URL:", speciality);
    console.log("Doctors:", doctors);
    applyFilter();
  }, [doctors, speciality]);
    
  return (
    <div>
      <p className="text-black font-bold">Suggestions</p>
      <div className="flex flex-col sm:flex-row items-start gap-4 mt-5">
        <div className="flex flex-col font-semibold text-sm space-y-4 text-black">

        <p onClick={() =>speciality === "General_physician"? navigate("/doctors"): navigate("/doctors/General_physician")}
            className={`flex items-center w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "General_Physician" ? "bg-indigo-100 text-black" : ""}`}>
            <FaStethoscope className="mr-2 text-2xl text-blue-500" /> General Physician
          </p>

          <p onClick={() =>speciality === "Gynecologist"? navigate("/doctors"): navigate("/doctors/Gynecologist")}
            className={`flex items-center w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>
            <FaFemale className="mr-2 text-2xl text-blue-500" /> Gynecologist
          </p>

          <p onClick={() => speciality === "Dermatologist" ? navigate("/doctors"): navigate("/doctors/Dermatologist")}
            className={`flex items-center w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>
            <FaHeartbeat className="mr-2 text-2xl text-blue-500" /> Dermatologist
          </p>

          <p onClick={() => speciality === "Pediatricians"? navigate("/doctors"): navigate("/doctors/Pediatricians")}
            className={`flex items-center w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>
            <FaChild className="mr-2 text-2xl text-blue-500" /> Pediatricians
          </p>

          <p onClick={() => speciality === "Neurologist" ? navigate("/doctors") : navigate("/doctors/Neurologist")}
            className={`flex items-center w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Neurologist" ? "bg-indigo-100 text-black" : "" }`}>
            <FaBrain className="mr-2 text-2xl text-blue-500" /> Neurologist
          </p>

          <p onClick={() => speciality === "Gastroenterologist" ? navigate("/doctors") : navigate("/doctors/Gastroenterologist")}
            className={`flex items-center w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Gastroenterologist" ? "bg-indigo-100 text-black": ""}`}>
            <FaUserMd className="mr-2 text-2xl text-blue-500" /> Gastroenterologist
          </p>
          <p onClick={() => speciality === "Eye_OPD" ? navigate("/doctors"): navigate("/doctors/Eye_OPD")}
            className={`flex items-center w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
            speciality === "Eye_OPD" ? "bg-indigo-100 text-black" : "" }`}>
            <FaEye className="mr-2 text-2xl text-blue-500" /> Eye OPD
            </p>
            
            </div>

        {/* Displaying the doctor  */}

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-5 gap-y-6 px-4 sm:px-0 pb-20'>
          {
            filterDoc.map((item,index) =>(
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
          ))
          }
        </div>
      </div>
    </div>
    
  );
};

export default Doctors;
