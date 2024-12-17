"use client";
import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { BsSearch, BsHouseDoor, BsShop, BsPencilSquare } from "react-icons/bs";
import { PiTrolleyFill } from "react-icons/pi";
import { HiMenu, HiX } from "react-icons/hi";
import { MdContactMail } from "react-icons/md";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">Furniture</a>
        </div>

        {/* Links - Centered */}
        <ul
          className="hidden md:flex md:space-x-8 text-gray-600 font-medium absolute left-1/2 transform -translate-x-1/2"
        >
          <li>
            <a href="/" className="hover:text-gray-800">
              <span className="md:hidden">
                <BsHouseDoor />
              </span>
              Home
            </a>
          </li>
          <li>
            <a href="/shop" className="hover:text-gray-800">
              <span className="md:hidden">
                <BsShop />
              </span>
              Shop
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:text-gray-800">
              <span className="md:hidden">
                <BsPencilSquare />
              </span>
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-800">
              <span className="md:hidden">
                <MdContactMail />
              </span>
              Contact
            </a>
          </li>
        </ul>

        {/* Icons & Hamburger Menu for Small Screens */}
        <div className="flex md:hidden items-center space-x-4">
          <BiUser className="w-5 h-5 text-gray-600" />
          <BsSearch className="w-5 h-5 text-gray-600" />
          <PiTrolleyFill className="w-5 h-5 text-gray-600" />
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            {isMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Icons - Desktop View */}
        <div className="hidden md:flex items-center space-x-6">
          <BiUser className="w-5 h-5 cursor-pointer text-gray-600" />
          <BsSearch className="w-5 h-5 cursor-pointer text-gray-600" />
          <PiTrolleyFill className="w-5 h-5 cursor-pointer text-gray-600" />
        </div>

        {/* Mobile Links */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:hidden absolute top-full left-0 w-full bg-white shadow-md text-gray-600 font-medium`}
        >
          <li>
            <a href="/" className="block py-4 px-6 hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="/shop" className="block py-4 px-6 hover:text-gray-800">
              Shop
            </a>
          </li>
          <li>
            <a href="/blog" className="block py-4 px-6 hover:text-gray-800">
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className="block py-4 px-6 hover:text-gray-800">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
