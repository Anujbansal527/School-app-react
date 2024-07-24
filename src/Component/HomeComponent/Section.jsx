import React from 'react';
import { Link } from 'react-router-dom';

const Sections = ({ sections }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {sections.map((section) => (
        <div
          key={section.path}
          className="border p-6 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer bg-white bg-opacity-90 backdrop-blur-lg"
        >
          <img
            src={section.imgSrc}
            alt={section.alt}
            loading="lazy"
            className="w-full h-40 object-cover rounded-lg mb-6"
          />
          <h3 className="text-3xl font-bold text-center">
            <Link to={section.path}>{section.title}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Sections;