'use client';

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@/icons';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export function Carousel({ slides, intervalTime = 7000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  function imageFile(str) {
    let regex = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/);

    if (str == null) {
      return false;
    }
    if (regex.test(str) == true) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, intervalTime);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="group relative mx-auto w-full">
      <div className="overflow-hidden">
        {imageFile(slides[currentIndex]) ? (
          <Image
            width={2000}
            height={2000}
            priority
            src={slides[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="aspect-[5/2] w-full object-cover object-center transition duration-700 ease-in-out max-sm:aspect-[5/3]"
          />
        ) : (
          <video
            key={slides[currentIndex]}
            width="320"
            height="240"
            autoPlay
            loop
            muted
            preload="auto"
            className="aspect-[5/2] w-full object-cover object-center transition duration-700 ease-in-out max-sm:aspect-[5/3]"
          >
            <source src={slides[currentIndex]} type="video/mp4" />
          </video>
        )}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 transform rounded-full bg-gray-600/60 text-white hover:bg-gray-600 group-hover:block"
      >
        <ArrowLeftCircleIcon />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 transform rounded-full bg-gray-600/60 text-white hover:bg-gray-600 group-hover:block"
      >
        <ArrowRightCircleIcon />
      </button>

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
