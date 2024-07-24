import React from 'react';

const SectionCard = ({ title, content, isOpen, toggleSection }) => {
  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md">
      <h3 className="text-2xl font-semibold cursor-pointer" onClick={toggleSection}>{title}</h3>
      {isOpen && (
        <p className="my-2 mt-4">{content}</p>
      )}
    </div>
  );
};

export default SectionCard;
