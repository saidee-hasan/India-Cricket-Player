// src/Footer.js
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Bg from "../../assets/bg-shadow.png";
import Logo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <>
      <div className="relative container mx-auto mt-10">
        <img
          src={Bg}
          alt="Background"
          className="w-full h-[400px]  bg-gray-800  object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center  p-5 md:p-10">
          <div className="text-center md:space-y-5 space-y-2">
            <h1 className="text-white font-bold text-lg md:text-2xl lg:text-3xl">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>

            <p className="text-white text-sm md:text-base lg:text-lg">
              Beyond Boundaries Beyond Limits
            </p>

            <div className="mx-auto"></div>
          </div>
        </div>
      </div>




      <footer className="bg-gray-800 text-white py-10 ">
        <img className="mx-auto mt-24" src={Logo} alt="" />
        <div className="container mx-auto px-4  ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h5 className="text-lg font-bold mb-4">About Us</h5>
              <p className="text-gray-400">
                We are dedicated to providing the best services to our
                customers. Our goal is to exceed your expectations.
              </p>
            </div>
            {/* Links Section */}
            <div>
              <h5 className="text-lg font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Section */}
            <div>
              <h5 className="text-lg font-bold mb-4">Contact Us</h5>
              <p className="text-gray-400">123 Main Street, City, Country</p>
              <p className="text-gray-400">Email: info@example.com</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
            </div>
          </div>
          {/* Social Media Section */}
          <div className="flex justify-center space-x-6 mt-8">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
