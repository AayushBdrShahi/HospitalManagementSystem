import React from "react";
import Heros_img from '../assets/Heros.png'
const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap px-6 md:px-10 bg-blue-50 bg-opacity-50 rounded-md">
      {/* -------------Left Side ----------------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold leading-tight md:leading-tight lg:leading-tight">
          Book Your <span className="text-primary">Doctor </span>
          <br />
          <span className="text-primary">Appointment</span> Online
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-3 text-gray text-sm font-size:14px">
          <p>
            Easily connect with your favorite doctors and schedule appointments{" "}
            <br /> with those you trust most, all in one seamless experience.
          </p>
        </div>

        <a href="#speciality" className="flex items-center justify-center bg-primary px-6 py-4 rounded-full text-white md:m-0 hover:scale-105 transition-all duration-300 min-w-[150px] text-center">
    Book Appointment
</a>


      </div>
 {/* -------------Right Side ----------------- */}
<div className="relative md:w-1/2 flex justify-center items-center">
  <img
    className="w-[1000px] h-[600px] rounded-lg object-cover"
    src={Heros_img}
    alt="Hero"
  />
</div>

    </div>
  );
};

export default Header;

