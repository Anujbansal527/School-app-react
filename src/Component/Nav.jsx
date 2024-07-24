import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg transition-shadow duration-300 hover:shadow-xl backdrop-blur-md bg-opacity-80">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img src="logo.svg" alt="SPSLogo" className="h-8 md:h-8 sm:h-6 bg-blue-600 rounded-[50%]" />
            </Link>
            <Link to="/" className="text-xl font-bold">Springdale Public School</Link>
          </div>
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <span className="text-xl">{isOpen ? '✖' : '☰'}</span>
          </button>
        </div>
        <ul className={`mt-2 md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:items-center`}>
          <li><Link to="/" className="block mt-2 md:mt-0 focus:border-b-2 focus:border-white focus:outline-none">Home</Link></li>
          <li><Link to="/academics" className="block mt-2 md:mt-0 focus:border-b-2 focus:border-white focus:outline-none">Academics</Link></li>
          <li><Link to="/admissions" className="block mt-2 md:mt-0 focus:border-b-2 focus:border-white focus:outline-none">Admissions</Link></li>
          <li><Link to="/gallery" className="block mt-2 md:mt-0 focus:border-b-2 focus:border-white focus:outline-none">Gallery</Link></li>
          <li><Link to="/faculty" className="block mt-2 md:mt-0 focus:border-b-2 focus:border-white focus:outline-none">Faculty</Link></li>
          <li><Link to="/students" className="block mt-2 md:mt-0 focus:border-b-2 focus:border-white focus:outline-none">Students</Link></li>
          <li><Link to="/about" className="block mt-2 md:mt-0 focus:border-b-2 focus:border-white focus:outline-none">About Us</Link></li>
          <li><Link to="/contact" className="block mt-2 md:mt-0 focus:border-b-2 focus:border-white focus:outline-none">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  ); 
};

export default Navbar;