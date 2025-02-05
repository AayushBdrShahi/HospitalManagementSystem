import React from 'react';

const Payment = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-4">
      {/* Payment Success Container */}
      <div className=" p-10 rounded-3xl shadow-lg text-center max-w-lg w-100">
        {/* Payment Success Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png"
          alt="Payment Successful"
          className="w-48 h-48 mb-8 mx-auto"
        />

        {/* Payment Success Message */}
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">Payment Successful!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your payment. Your order is being processed.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => window.location.href = 'http://localhost:5173/'}
            className="bg-[#D1D5DB] text-gray-800 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-[#B0B7BC] transition-all duration-300"
          >
            Go to Home
          </button>
          <button
            onClick={() => window.location.href = 'http://localhost:5173/my-appointments'}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Back to Appointments
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;






