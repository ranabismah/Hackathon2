import React from "react";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { PiTrolleyFill } from "react-icons/pi";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">Furniture</a>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <li>
            <a href="/" className="hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="/shop" className="hover:text-gray-800">
              Shop
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:text-gray-800">
              Blog
            </a>
          </li>
          
          <li>
            <a href="/contact" className="hover:text-gray-800">
              Contact
            </a>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-6">
        <BiUser />
          <BsSearch />
         
          <PiTrolleyFill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
