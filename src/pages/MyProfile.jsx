import React, { useState } from 'react';
import { FaEdit, FaSave } from 'react-icons/fa';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Aayush Shahi',
    image: assets.profile,
    email: 'aayushshahi7@gmail.com',
    phone: '+977 98463829',
    address: {
      line1: 'Ktm, Nepal',
    },
    gender: 'Male',
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105">
      <div className="flex items-center space-x-6 mb-8">
        <img
          className="w-36 h-36 rounded-full border-4 border-indigo-500 shadow-xl transform hover:scale-105 transition-transform duration-200"
          src={userData.image}
          alt="Profile"
        />
        <div className="flex-1">
          {isEdit ? (
            <input
              className="bg-indigo-50 text-3xl font-semibold p-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              type="text"
              value={userData.name}
              onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
            />
          ) : (
            <h2 className="text-3xl font-semibold text-gray-900">{userData.name}</h2>
          )}
        </div>
      </div>

      <hr className="my-6 border-t-2 border-gray-200" />

      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <p className="text-lg text-gray-800">{userData.email}</p>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Phone</label>
          {isEdit ? (
            <input
              type="text"
              className="bg-indigo-50 p-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              value={userData.phone}
              onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
            />
          ) : (
            <p className="text-lg text-gray-800">{userData.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Address</label>
          {isEdit ? (
            <input
              type="text"
              className="bg-indigo-50 p-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              value={userData.address.line1}
              onChange={(e) => setUserData((prev) => ({
                ...prev,
                address: { ...prev.address, line1: e.target.value },
              }))}
            />
          ) : (
            <p className="text-lg text-gray-800">{userData.address.line1}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Gender</label>
          {isEdit ? (
            <select
              className="bg-indigo-50 p-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              value={userData.gender}
              onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-lg text-gray-800">{userData.gender}</p>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-end space-x-4">
        <button
          className={`px-6 py-3 rounded-lg text-white font-semibold shadow-md ${
            isEdit ? 'bg-green-600 hover:bg-green-500' : 'bg-blue-600 hover:bg-blue-500'
          } transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          onClick={() => setIsEdit(!isEdit)}
        >
          {isEdit ? (
            <>
              <FaSave className="inline-block mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <FaEdit className="inline-block mr-2" />
              Edit Profile
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
