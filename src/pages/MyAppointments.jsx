import React from "react";
import { useAppContext } from "../context/Appcontext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Payment from "./Payment";

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useAppContext();

  const [appointments, setAppointments] = useState([]);

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/appointments", {
        headers: { token },
      });
      if (data.success) {
        setAppointments(data.appointments.reverse());
        console.log(data.appointments);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      console.log("Cancelling Appointment ID:", appointmentId);
      const { data } = await axios.post(
        backendUrl + "/api/user/cancel-appointment",
        { appointmentId },
        { headers: { token } }
      );

      if (data.success) {
        alert("You sure want to cancel");
        toast.success(data.message);

        // Remove the canceled appointment from the state
        setAppointments((prevAppointments) =>
          prevAppointments.filter(
            (appointment) => appointment._id !== appointmentId
          )
        );

        // Fetch updated doctors' data
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error cancelling appointment:", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  const handlePayment = async (doctorName, doctorFees) => {
    const body = JSON.stringify({
      return_url: "http://localhost:5173/Payment",
      website_url: "http://localhost:5173/",
      amount: doctorFees * 100, // Assuming the amount needs to be in cents/paise
      purchase_order_id: "Order01",
      purchase_order_name: doctorName,
      customer_info: {
        name: doctorName,
      },
    });

    try {
      const response = await axios.post(
        backendUrl + "/api/user/khalti-payment",
        { body },
        { headers: { token } }
      );

      if (response.status !== 200) {
        throw new Error("Payment initiation failed!");
      }

      const responseData = response.data?.data;
      const { payment_url } = responseData || {};

      if (!payment_url) {
        throw new Error("Payment URL not received!!");
      }

      window.location.href = payment_url;
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment initiation failed. Please try again.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        My Appointments
      </h2>
      <div className="space-y-10">
        {appointments.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 flex flex-col lg:flex-row items-center justify-between"
          >
            {/* Doctor Image */}
            <div className="flex-shrink-0 mb-6 lg:mb-0">
              <img
                className="w-36 h-36 object-cover rounded-xl border-2"
                src={item.docData.image}
                alt={item.name}
              />
            </div>

            {/* Appointment Details */}
            <div className="flex-1 lg:ml-8">
              <p className="text-xl font-bold text-gray-800">
                {item.docData.name}
              </p>
              <p className="text-md text-gray-600 mt-2">
                <span className="font-medium">Speciality:</span>{" "}
                {item.docData.speciality}
              </p>
              <p className="text-md text-gray-600 mt-2">
                <span className="font-medium">Experience:</span>{" "}
                {item.docData.experience} years
              </p>
              <p className="text-md text-gray-600 mt-2">
                <span className="font-medium">Fees:</span> ${item.docData.fees}
              </p>
              <p className="text-md text-gray-600 mt-4">
                <span className="font-medium">Date & Time:</span>{" "}
                {item.slotDate} | {item.slotTime}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-4 lg:ml-8">
              <button
                onClick={() =>
                  handlePayment(item.docData.name, item.docData.fees)
                }
                className="bg-indigo-600 text-white text-md px-6 py-3 rounded-lg hover:bg-indigo-500 transition-all shadow-lg"
              >
                Pay Online
              </button>

              <button
                onClick={() => cancelAppointment(item._id)}
                className="bg-red-500 text-white text-md px-6 py-3 rounded-lg hover:bg-red-400 transition-all shadow-lg"
              >
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
