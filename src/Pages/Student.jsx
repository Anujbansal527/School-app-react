import React from 'react'; 
import { achievements, clubsAndActivities, studentResources } from './../assets/DummyData/StudentData';

const StudentsPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center">Students</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="border p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer bg-white bg-opacity-90">
          <h3 className="text-2xl font-semibold">Clubs and Activities</h3>
          <ul className="list-disc ml-6 my-2">
            {clubsAndActivities.map((club, index) => (
              <li key={index}>{club}</li>
            ))}
          </ul>
        </div>

        <div className="border p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer bg-white bg-opacity-90">
          <h3 className="text-2xl font-semibold">Student Resources</h3>
          <p className="my-2">{studentResources}</p>
        </div>

        <div className="border p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer bg-white bg-opacity-90">
          <h3 className="text-2xl font-semibold">Achievements</h3>
          <ul className="list-disc ml-6 my-2">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;