import React from 'react';
import { facultyData } from '../assets/DummyData/FacultyData';

const FacultyPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center">Faculty</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {facultyData.map(member => (
          <div 
            key={member.name} 
            className="border p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer bg-white bg-opacity-80 backdrop-blur-md"
          >
            <h3 className="text-2xl font-semibold">{member.name}</h3>
            <p className="text-xl">{member.position}</p>
            <p className="my-2"><strong>Qualification:</strong> {member.qualification}</p>
            <p><strong>Experience:</strong> {member.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyPage;