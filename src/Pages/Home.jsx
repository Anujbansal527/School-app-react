import React from "react";
import { carouselData } from "../assets/DummyData/CarouselData";
import CarouselComponent from "../Component/Carousel";
import Sections from "../Component/HomeComponent/Section";
import { sectionsData } from "../assets/DummyData/HomeSectionData";

const HomePage = () => {
  return (
    <div className="relative p-6">
      <div className="top-10 right-6 z-20 bg-black bg-opacity-90 p-6 text-white m-6 flex flex-col sm:flex-row items-center sm:items-start sm:absolute">
        <img
          src="logo.svg"
          alt="Springdale Public School Logo"
          className="mx-auto rounded-full mb-6 h-20 md:h-16 sm:h-12 w-20 md:w-16 sm:w-12"
        />
        <div className="text-center sm:text-left sm:ml-6">
          <h1 className="text-5xl font-bold md:text-4xl sm:text-3xl">
            Springdale Public School
          </h1>
          <p className="my-6 md:my-4 sm:my-2">
          Welcome to Springdale Public School, 
          where we nurture young minds for a brighter future
          </p>
        </div>
      </div>

      <div className="w-full mt-4">
        <CarouselComponent data={carouselData} />
      </div>

      <Sections sections={sectionsData} />
    </div>
  );
};

export default HomePage;
