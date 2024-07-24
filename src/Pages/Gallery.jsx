import React from 'react';
import { images, videos } from '../assets/DummyData/GallaryData';

const GalleryPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
      
      <h3 className="text-2xl font-semibold text-center mb-4">Photos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {images.map((image, index) => (
          <div key={index} className="border p-2 rounded-lg shadow-lg">
            <img src={image.src} alt={image.alt} className="w-full h-48 md:h-64 lg:h-80 object-cover" />
            <h3 className="text-center mt-2 bg-yellow-300 p-1 rounded">{image.title}</h3>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-center mt-8 mb-4">Videos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {videos.map((video, index) => (
          <div key={index} className="border p-2 rounded-lg shadow-lg">
            <video controls className="w-full h-48 md:h-64 lg:h-80 object-cover">
              <source src={video.src} type="video/mp4" />
              {video.alt}
            </video>
            <h3 className="text-center mt-2 bg-yellow-300 p-1 rounded">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
