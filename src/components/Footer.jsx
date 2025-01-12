import { FaFacebookF, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-medium text-lg mb-4 text-gray-800">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="cursor-pointer hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="cursor-pointer hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="cursor-pointer hover:text-blue-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-lg mb-4 text-gray-800">Get in Touch</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500" />
              <span>+977 9840334044</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <span>healthtime@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Hattigaunda, KTM</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-lg mb-4 text-gray-800">Follow Us</h4>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/your-company"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 my-8" />

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm">
          © 2024 HealthTime. All rights reserved.
        </p>
        <p className="text-gray-600 text-sm mt-4 md:mt-0">Health is Life</p>
      </div>
    </footer>
  );
};

export default Footer;
