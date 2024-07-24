import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-8 text-white text-center">
      <div className="container mx-auto">
        <p className="text-lg">© 2024 Springdale Public School. All rights reserved.</p>
        
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/contact" className="text-blue-400 hover:underline">Contact Us</Link>
              <Link to="/about" className="text-blue-400 hover:underline">About Us</Link>
              <Link to="/admissions" className="text-blue-400 hover:underline">Admissions</Link>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Our Address</h3>
            <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Email: info@springdale.edu</p>
          </div>
          <div className="w-full md:w-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1234567890123!2d75.8577253150481!3d22.7195689851031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3c123456789%3A0x123456789abcdef!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sin!4v1611234567890!5m2!1sen!2sin"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Springdale Public School Location"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;