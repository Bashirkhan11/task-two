import React, { useState } from "react";
import { IoIosCall, IoMdContact, IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

export default function Navbar(props) {
  // State to manage mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`${props.state === 'dark'? 'bg-black': 'bg-[#f3f3f3]'}  h-[80px] flex justify-between items-center px-4 md:px-8`}>
        <div>
          <img className="w-[120px] md:w-[100px]" src="images/logo.png" alt="Logo" />
        </div>

        {/* Menu icon for mobile */}
        <div className={`sm:block md:hidden ${props.state === 'dark'? ' text-white ':''}`}>
          {/* Conditionally render the menu or close icon based on isMenuOpen state */}
          {isMenuOpen ? (
            <IoMdClose
              className="text-4xl cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <IoMenu
              className="text-4xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Menu items for desktop (hidden on mobile) */}
        <div className={`hidden md:flex ${props.state === 'dark'? 'bg-black': 'bg-[#f3f3f3]'}`}>
          <ul className={`inline-flex space-x-5 ${props.state === 'dark'? 'text-white': ''}`}>
            <li className="mt-5">Home</li>
            <li className="mt-5">About</li>
            <li className="mt-5">Properties</li>
            <li className="mt-5">Services</li>
            <li className="mt-5">Testimonials</li>
            <li className="mt-5">Contact</li>
          </ul>
        </div>

        {/* Mobile Menu (only visible when menu is open) */}
        <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } 
            ${props.state === 'dark' ? 'bg-black' : 'bg-[#1E293B]'} 
            md:hidden absolute top-[80px] font-bold left-0 right-0 z-10 p-4 text-white`}
          >
          <ul className="space-y-4 flex flex-col justify-center items-center">
            <li className="text-lg pr-[40%] pl-[40%] pt-2 rounded pb-2  hover:bg-red-700 hover:text-black">Home</li>
            <li className="text-lg pr-[40%] pl-[40%] pt-2 rounded pb-2  hover:bg-red-700 hover:text-black">About</li>
            <li className="text-lg pr-[40%] pl-[40%] pt-2 rounded pb-2  hover:bg-red-700 hover:text-black">Properties</li>
            <li className="text-lg pr-[40%] pl-[40%] pt-2 rounded pb-2  hover:bg-red-700 hover:text-black">Services</li>
            <li className="text-lg pr-[40%] pl-[40%] pt-2 rounded pb-2  hover:bg-red-700 hover:text-black">Testimonials</li>
            <li className="text-lg pr-[40%] pl-[40%] pt-2 rounded pb-2  hover:bg-red-700 hover:text-black">Contact</li>
          </ul>
        </div>

        {/* Contact icons */}
        <div className="flex items-center space-x-2">
          <IoIosCall className="text-2xl text-red-600 " />
          <IoMdContact className="text-2xl text-red-600 order-3" />
          <p className={`lg:text-xl font-bold ${props.state === 'dark'? 'text-white': ''}`}>888-908-9102</p>
        </div>
      </nav>
    </>
  );
}