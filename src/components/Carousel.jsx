'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export function Carousel({ slides, intervalTime = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to move to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, intervalTime); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative mx-auto w-full">
      <div className="overflow-hidden">
        <Image
          width={2000}
          height={2000}
          priority
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="aspect-[5/2] w-full object-cover object-center transition duration-700 ease-in-out max-sm:aspect-[5/3]"
        />
      </div>

      {/* Previous Button */}
      {/* <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-600/60 text-white px-3 py-1 rounded-full hover:bg-gray-600"
      >
        ❮
      </button> */}

      {/* Next Button */}
      {/* <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-600/60 text-white px-3 py-1 rounded-full hover:bg-gray-600"
      >
        ❯
      </button> */}

      {/* Indicators */}
      <div className="mb-3 mt-1 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 w-3 rounded-full max-sm:h-px ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-400 hover:bg-gray-600'}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
