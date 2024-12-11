import React from 'react';
import { FaMailBulk, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Simple validation check for empty fields
    for (let [_, value] of formData.entries()) {
      if (!value) {
        alert(`Please enter all fields.`);
        return; // Stop form submission if a field is empty
      }
    }

    formData.append("access_key", "fbc08d79-59a2-47f9-9358-7bb68535696b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset(); // Clear the input fields after successful submission
    } else {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center gap-12 py-16 px-8 text-black">
      <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-700 mb-10">
            If you have any questions or need assistance, our team is here to help. Simply fill out the form, and we’ll get back to you as soon as possible. Whether it's a query about your appointment or just to say hello, we're ready to provide the support you need.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaMailBulk size={32} className="text-gray-700" />
              <p className="text-lg text-gray-700">healthtime122@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone size={32} className="text-gray-700" />
              <p className="text-lg text-gray-700">+772-825-524</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt size={32} className="text-gray-700" />
              <p className="text-lg text-gray-700">KTM, NEPAL</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <label htmlFor="name" className="text-lg font-semibold">Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" className="w-full p-3 bg-gray-100 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 required" />

            <label htmlFor="email" className="text-lg font-semibold">Your Email</label>
            <input type="email" name="email" placeholder="Enter your email" className="w-full p-3 bg-gray-100 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 required" />

            {/* Phone Number Field */}
            <label htmlFor="phone" className="text-lg font-semibold">Your Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your phone number" className="w-full p-3 bg-gray-100 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 required" />

            <label htmlFor="message" className="text-lg font-semibold">Your Message</label>
            <textarea name="message" rows={8} placeholder="Enter your message" className="w-full p-3 bg-gray-100 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 required resize-vertical"></textarea>

            <button type="submit" className="self-start py-4 px-8 bg-blue-500 text-white text-lg font-semibold rounded-full hover:bg-blue-600 transition">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
