import React, { useState } from 'react';

const CurriculumCard = ({ title, subjects, streams }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showStreamDetails, setShowStreamDetails] = useState({});

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleStreamDetails = (index) => {
    setShowStreamDetails((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="w-full md:w-1/3 p-2">
      <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-md backdrop-blur-md">
        <h4 className="text-xl font-semibold mt-2 cursor-pointer" onClick={toggleDetails}>{title}</h4>
        {showDetails && (
          <>
            {subjects && (
              <ul className="list-disc ml-6 my-2">
                {subjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
            )}
            {streams && streams.map((stream, index) => (
              <div key={index} className="bg-gray-100 bg-opacity-80 p-4 rounded-lg shadow-md mt-4 backdrop-blur-md">
                <h4 className="text-xl font-semibold cursor-pointer" onClick={() => toggleStreamDetails(index)}>{stream.title}</h4>
                {showStreamDetails[index] && (
                  <ul className="list-disc ml-6 my-2">
                    {stream.subjects.map((subject, subIndex) => (
                      <li key={subIndex}>{subject}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CurriculumCard;
