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
    <div className="relative mt-40">
      <div className="   md:w-11/12 mx-auto absolute  p-5   inset-0  z-30 text-white justify-center text-center">
        <div className="relative  h-[200px] p-10 ">
          <div
            className="absolute inset-0 bg-cover bg-slate-400 bg-center  rounded-2xl"
            style={{
              backgroundImage: `url(${Bg})`,

              backgroundSize: "cover", // Ensure the image covers the entire div

              backgroundPosition: "center", // Center the image
            }}
          ></div>

          <div className="relative container mx-auto px-4 z-10">
            <h2 className="text-white text-2xl font-bold text-center mb-4 ">
              Subscribe to Our Newsletter
            </h2>

            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-l-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button className="bg-blue-500 text-white p-3 rounded-r-md hover:bg-blue-600 transition duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-10   w-full absolute top-32 ">
        <img className="mx-auto mt-32 " src={Logo} alt="" />
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

             

          
              <div className="flex ">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-l-md w-full sm:w-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button className="bg-blue-500 text-white p-3 rounded-r-md hover:bg-blue-600 transition duration-200">
                Subscribe
              </button>
            </div>
           
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
        <br />
        <hr />
        <br />
        <p className="text-center">@2024 Your Company All Rights Reserved.</p>


      </footer>
    </div>
  );
};

export default Footer;
