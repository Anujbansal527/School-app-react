// src/pages/AcademicsPage.js
import React, { useState } from "react";
import CurriculumCard from "../Component/AcedemicComponent/CurriculumCard";
import SectionCard from "../Component/AcedemicComponent/SectionCard";
import { curriculumData } from "./../assets/DummyData/AcedmicData";

const AcademicsPage = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const toggleSection = (section) => {
    setSelectedSection(selectedSection === section ? null : section);
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Academics</h2>
      <div className="space-y-4">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md">
          <h3
            className="text-2xl font-semibold cursor-pointer"
            onClick={() => toggleSection("curriculum")}
          >
            Curriculum
          </h3>
          {selectedSection === "curriculum" && (
            <div className="mt-4">
              <div className="bg-gray-100 bg-opacity-80 p-4 rounded-lg shadow-md backdrop-blur-md">
                <div className="flex flex-wrap justify-between">
                  {curriculumData.map((section, index) => (
                    <CurriculumCard
                      key={index}
                      title={section.title}
                      subjects={section.subjects}
                      streams={section.streams}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <SectionCard
          title="Teaching Methodologies"
          content="We use a blend of traditional and modern teaching techniques to cater to different learning styles."
          isOpen={selectedSection === "methodologies"}
          toggleSection={() => toggleSection("methodologies")}
        />
        
        <SectionCard
          title="Educational Resources"
          content="Digital classrooms, interactive learning modules, and access to online educational platforms."
          isOpen={selectedSection === "resources"}
          toggleSection={() => toggleSection("resources")}
        />
      </div>
    </div>
  );
};

export default AcademicsPage;
