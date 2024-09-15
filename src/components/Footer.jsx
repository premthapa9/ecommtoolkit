import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#143444] text-white py-8  px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="">
          <h1 className="font-bold text-xl">E-Brand</h1>
          <p className="pr-5">
            Your one-stop shop for all your needs. Shop with us and experience
            the best online shopping experience
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h1 className="text-lg font-semibold">Quicks Links</h1>
          <ul className="mt-2 space-y-2">
            <li className="hover:underline underline-offset-8">Home</li>
            <li className="hover:underline underline-offset-8">Shop</li>
            <li className="hover:underline underline-offset-8">About Us</li>
            <li className="hover:underline underline-offset-8 ">Contact Us</li>
          </ul>
        </div>
        <div className="">
          <h1 className="font-semibold text-lg">Follow Us</h1>
          <div className="flex space-x-4 mt-3">
            <a href="" className="hover:text-gray-400">
              <FaFacebook size={30} />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaTwitter size={30} />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaInstagram size={30} />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaLinkedin size={30} />
            </a>
          </div>
          <form className="flex items-center justify-center mt-4">
            <input
              type="text"
              placeholder="Your Email"
              className="w-full p-2 border outline-none rounded-l-lg bg-gray-800 border-gray-600"
            />
            <button className="bg-red-600 text-white px-4 border border-gray-600 py-2 rounded-r-lg">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 e-brand. All right reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <h1 className="hover:underline underline-offset-8">
              Privarcy Policy
            </h1>
            <h1 className="hover:underline underline-offset-8">
              Terms of Service
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
  {
    /* <div className="p-4">
        <p>&copy; 2024 e-brand. All right reserved</p>
        <div>
          <h1>Privarcy Policy</h1>
          <h1>Terms of Service</h1>
        </div>
      </div> */
  }
};

export default Footer;
