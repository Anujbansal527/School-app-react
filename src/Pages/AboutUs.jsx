import React from 'react';
import { aboutData } from '../assets/DummyData/AboutData'; 

const AboutPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
      <div className="my-4 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md">
        <p className="text-lg">{aboutData.history}</p>
      </div>
      <div className="my-4 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md">
        <h3 className="text-2xl font-semibold">Vision</h3>
        <p className="my-2">{aboutData.vision}</p>
      </div>
      <div className="my-4 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md">
        <h3 className="text-2xl font-semibold">Mission</h3>
        <p className="my-2">{aboutData.mission}</p>
      </div>
      <div className="my-4 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md">
        <h3 className="text-2xl font-semibold">Principal's Message</h3>
        <p className="my-2">{aboutData.principalMessage}</p>
      </div>
      <div className="my-4 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md">
        <h3 className="text-2xl font-semibold">Infrastructure and Facilities</h3>
        <ul className="list-disc ml-6 my-2">
          {aboutData.facilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;