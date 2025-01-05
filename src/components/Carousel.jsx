'use client'

import React, { useState, useEffect } from "react";


export function Carousel({slides}) {

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden">
        <img
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full aspect-[5/2] max-sm:aspect-[5/3] object-cover transition duration-700 ease-in-out"
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
      <div className="flex justify-center mb-3 mt-1 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 max-sm:h-px h-1 rounded-full ${
              index === currentIndex
                ? "bg-blue-600"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

