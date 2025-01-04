
import React, { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { useAppContext } from "../context/Appcontext";
import upload_area from "../assets/upload_area.png";
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useAppContext();

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserPofileData = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);
  
      if (image) formData.append("image", image);
  
      const { data } = await axios.post(backendUrl + "/api/user/update-profile", formData, {
        headers: { token },
      });
  
      if (data.success) {
        toast.success(data.message || "Profile Updated Successfully");
        await loadUserProfileData(); 
        setIsEdit(false); 
        setImage(false); 
      } else {
        toast.error(data.message || "Failed to update profile");
      }
    } catch (error) {
      console.error("Update Error:", error.message);
      toast.error("Failed to update profile.");
    }
  };
  
  return (
    userData && (
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105">
        <div className="flex items-center space-x-6 mb-8">
          <div className="relative">
            {isEdit ? (
              <label htmlFor="image" className="cursor-pointer">
                <div className="w-36 h-36 rounded-full border-4 border-dashed border-indigo-500 shadow-xl flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-all duration-300 relative">
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <img
                      src={userData.image}
                      alt="User Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  )}
                  <div
                    className={`absolute inset-0 flex items-center justify-center ${
                      image ? "opacity-0" : "opacity-100"
                    } transition-opacity duration-300`}
                  >
                    <img
                      src={upload_area}
                      alt="Upload Icon"
                      className="w-8 h-8 opacity-50"
                    />
                    <p className="text-gray-500 text-sm mt-1">Click to Upload</p>
                  </div>
                </div>
                <input
                  type="file"
                  id="image"
                  hidden
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            ) : (
              <img
                className="w-36 h-36 rounded-full border-4 border-indigo-500 shadow-xl transform hover:scale-105 transition-transform duration-200"
                src={userData.image}
                alt="Profile"
              />
            )}

            {isEdit && image && (
              <button
                onClick={() => setImage(null)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-2 shadow-md transform hover:scale-110 transition-transform duration-200"
              >
                ✖
              </button>
            )}
          </div>

          <div className="flex-1">
            {isEdit ? (
              <input
                className="bg-indigo-50 text-3xl font-semibold p-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            ) : (
              <h2 className="text-3xl font-semibold text-gray-900">
                {userData.name}
              </h2>
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
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
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
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
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
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
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
              isEdit
                ? "bg-green-600 hover:bg-green-500"
                : "bg-blue-600 hover:bg-blue-500"
            } transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            onClick={() => {
              if (isEdit) updateUserPofileData();
              setIsEdit(!isEdit);
            }}
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
    )
  );
};

export default MyProfile;
