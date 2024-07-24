import React, { useState } from 'react';
import { admissionsData } from '../assets/DummyData/AddmissionData';

const AdmissionsSection = ({ title, children }) => (
  <div className="mb-8 p-6 bg-white bg-opacity-90 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

const AdmissionsPage = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Admissions</h2>
      
      <AdmissionsSection title={admissionsData.processAndCriteria.title}>
        <p className="mb-2">{admissionsData.processAndCriteria.description}</p>
        <button onClick={toggleDetails} className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300 mb-2">
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <>
            <ol className="list-decimal ml-6 mb-2">
              {admissionsData.processAndCriteria.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <p className="mb-2">{admissionsData.processAndCriteria.additionalInfo}</p>
            <a href={admissionsData.processAndCriteria.formLink} className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300">Download Admission Form</a>
          </>
        )}
      </AdmissionsSection>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AdmissionsSection title={admissionsData.importantDates.title}>
          <ul className="list-disc ml-6">
            {admissionsData.importantDates.dates.map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
        </AdmissionsSection>

        <AdmissionsSection title={admissionsData.admissionCriteria.title}>
          <p>{admissionsData.admissionCriteria.description}</p>
        </AdmissionsSection>

        <AdmissionsSection title={admissionsData.documentsRequired.title}>
          <ul className="list-disc ml-6">
            {admissionsData.documentsRequired.documents.map((document, index) => (
              <li key={index}>{document}</li>
            ))}
          </ul>
        </AdmissionsSection>

        <AdmissionsSection title={admissionsData.contact.title}>
          <p>{admissionsData.contact.description}</p>
          <p>Email: <a href={`mailto:${admissionsData.contact.email}`} className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300">{admissionsData.contact.email}</a></p>
          <p>Phone: <a href={`tel:${admissionsData.contact.phone}`} className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300">{admissionsData.contact.phone}</a></p>
        </AdmissionsSection>
      </div>
    </div>
  );
};

export default AdmissionsPage;