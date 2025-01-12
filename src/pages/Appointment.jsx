
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/Appcontext";
import { toast } from "react-toastify";
import axios from "axios";

const Appointment = () => {
  const { docId } = useParams(); 
  const {userData, doctors, currencySymbol, token, backendUrl, getDoctorsData } = useAppContext(); 
  const [docInfo, setDocInfo] = useState(null); 
  const [docSlots, setDocSlots] = useState([]); 
  const [slotIndex, setSlotIndex] = useState(0); 
  const [slotTime, setSlotTime] = useState(""); 
  const navigate = useNavigate();

  const fetchDocInfo = () => {
    if (!doctors.length) return; 
    const doctor = doctors.find((doc) => doc._id === docId);
    if (doctor) {
      setDocInfo(doctor);
    } else {
      console.error("Doctor not found for docId:", docId);
      toast.error("Doctor not found!");
      navigate("/doctors"); 
    }
  };

  // Generate available time slots for 7 days
  const getAvailableSlots = () => {
    if (!docInfo) return;
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const slots = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      if (currentDate.getDay() === 6) continue; 

      const daySlots = [];
      let startTime = new Date(currentDate.setHours(10, 0, 0)); 
      const endTime = new Date(currentDate.setHours(21, 0, 0)); 

      while (startTime < endTime) {
        const time = startTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        daySlots.push({ datetime: new Date(startTime), time });
        startTime.setMinutes(startTime.getMinutes() + 30);
      }

      slots.push({
        day: daysOfWeek[currentDate.getDay()],
        date: currentDate.getDate(),
        slots: daySlots,
      });
    }

    setDocSlots(slots);
  };
  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Please login to book an appointment.");
      return navigate("/login");
    }
    if (!slotTime) {
      toast.warn("Please select a time slot.");
      return;
    }
  
    try {
      const selectedDate = docSlots[slotIndex].slots.find(slot => slot.time === slotTime).datetime;
      const slotDate = new Date(selectedDate).toISOString().split("T")[0]; // Format date as YYYY-MM-DD
  
      if (!userData) {
        toast.error("Failed to load user data. Please try again.");
        return;
      }
  
      const { data } = await axios.post(
        `${backendUrl}/api/user/book-appointment`,
        {
          docId,
          slotDate,
          slotTime,
          userData, // Pass userData here
          docData: docInfo,
          amount: docInfo.fees,
        },
        {
          headers: { token },
        }
      );
  
      if (data.success) {
        toast.success(
          `Appointment booked with ${docInfo.name} on ${docSlots[slotIndex].day}, ${slotTime}!`
        );
        getDoctorsData(); // Refresh data if needed
        navigate("/my-appointments"); // Redirect to appointments page
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to book appointment.");
    }
  };
  
  
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  if (!docInfo) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">Loading doctor information...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-6">
      {/* Doctor Details */}
      <div className="flex flex-col sm:flex-row gap-8 bg-white shadow-2xl rounded-lg p-8 border border-gray-200">
        {/* Doctor Image */}
        <div className="w-full sm:w-1/3">
          <img
            src={docInfo.image}
            alt={docInfo.name}
            className="rounded-lg object-cover w-full h-72 transition-transform duration-300 transform hover:scale-105"
          />
        </div>

        {/* Doctor Info */}
        <div className="w-full sm:w-2/3 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">{docInfo.name}</h2>
          <p className="text-lg text-gray-600">
            {docInfo.degree} • {docInfo.speciality}
          </p>
          <p className="text-md text-blue-600 font-medium">
            Experience: {docInfo.experience} years
          </p>
          <p className="text-md text-gray-700 leading-relaxed">
            {docInfo.about}
          </p>
          <p className="text-gray-600 font-medium mt-4">
            Appointment fee:{" "}
            <span className="text-gray-700">
              {currencySymbol}
              {docInfo.fees}
            </span>
          </p>
        </div>
      </div>

      {/* Booking Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Select a Booking Slot
        </h3>
        <div className="flex gap-3 overflow-x-auto">
          {docSlots.map((day, index) => (
            <div
              key={index}
              className={`text-center py-6 px-4 min-w-20 rounded-lg cursor-pointer ${
                slotIndex === index
                  ? "bg-blue-500 text-white"
                  : "border border-gray-300"
              }`}
              onClick={() => {
                setSlotIndex(index);
                setSlotTime(""); // Reset selected time
              }}
            >
              <p>{day.day}</p>
              <p>{day.date}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-3 overflow-x-auto mt-4">
          {docSlots[slotIndex]?.slots.map((slot, index) => (
            <p
              key={index}
              className={`px-5 py-2 rounded-lg cursor-pointer ${
                slot.time === slotTime
                  ? "bg-blue-500 text-white"
                  : "border border-gray-300"
              }`}
              onClick={() => setSlotTime(slot.time)}
            >
              {slot.time}
            </p>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={bookAppointment}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
