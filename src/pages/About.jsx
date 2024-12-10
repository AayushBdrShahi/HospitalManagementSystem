import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="pb-16">
      <div className="text-2xl text-center font-bold pt-8">
        <h1 className="font-bold">About Us</h1>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-8 md:gap-16">
        <img
          className="w-full md:max-w-[600px] h-auto rounded-md"
          src={assets.aboutus}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-800 text-lg">
          <p>
            Welcome to HealthTime, your trusted partner in healthcare. Our
            doctor appointment booking system makes it easy to connect with
            qualified healthcare professionals, ensuring you get the care you
            need, when you need it.
          </p>
          <p>
            At HealthTime, we’re committed to simplifying the healthcare
            journey. From booking appointments with specialists to managing
            health records, our platform offers a seamless experience designed
            to put you in control of your health.
          </p>
          <b className="text-gray-900 text-lg">Our Mission</b>
          <p>
            Our goal at HealthTime is to provide a convenient, accessible, and
            reliable platform for healthcare needs. We believe that everyone
            deserves easy access to quality healthcare, and we strive to make
            that a reality through our innovative booking system.
          </p>
        </div>
      </div>
      <br /><br />

      {/* Doctor's Messages Section */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-10">
        <div className="flex flex-col items-center p-6 bg-blue-50 border-l-4 border-blue-500 shadow-md rounded-md w-full max-w-full md:max-w-[700px] min-h-[400px]">
          <img
            src={assets.doc1}
            alt="Dr. John Doe"
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full shadow-lg mb-4"
          />
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center">
            Message from Our Chief Medical Officer
          </h2>
          <p className="italic text-gray-700 text-center break-words flex-grow">
            "At HealthTime, we prioritize making healthcare accessible and
            stress-free. Our online booking system is designed to simplify your
            healthcare journey. With just a few clicks, you can connect with
            top specialists and book appointments at your convenience."
          </p>
          <div className="mt-4 text-right font-medium text-gray-800">
            — Dr. John Doe, Chief Medical Officer
          </div>
        </div>

        <div className="flex flex-col items-center p-6 bg-green-50 border-l-4 border-green-500 shadow-md rounded-md w-full max-w-full md:max-w-[700px] min-h-[400px]">
          <img
            src={assets.doc2}
            alt="Dr. Jane Smith"
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full shadow-lg mb-4"
          />
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center">
            Message from Our Senior Consultant
          </h2>
          <p className="italic text-gray-700 text-center break-words flex-grow">
            "Our team at HealthTime is dedicated to providing top-notch care
            through an efficient and user-friendly online system. We aim to
            make healthcare accessible by offering hassle-free appointment
            bookings. Trust us to be there for you."
          </p>
          <div className="mt-4 text-right font-medium text-gray-800">
            — Dr. Jane Smith, Senior Consultant
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
