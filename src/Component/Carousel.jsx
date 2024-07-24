import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({ data }) => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {data.map((item, index) => (
        <div key={index} className="h-96 relative">
          <img src={item.src} alt={item.alt} className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105" />
          <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-lg font-semibold">{item.label}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
