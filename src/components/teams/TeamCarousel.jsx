'use client';

import { teamMembers } from '@/data/teamMembers';
import { useRef } from 'react';
import { TeamCard } from './TeamCard';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@/icons';

export function TeamCarousel() {
  const carouselRef = useRef(null);
  const cardRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -cardRef.current.scrollWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: cardRef.current.scrollWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full overflow-hidden px-12 py-8 max-sm:px-4">
      {/* Left Button */}
      <button onClick={scrollLeft} className="absolute left-0 top-1/2 z-10">
        <ArrowLeftCircleIcon className="h-10 w-10 text-white max-md:h-6 max-md:w-6" />
      </button>

      {/* Carousel */}
      <div ref={carouselRef} className="flex snap-x snap-mandatory overflow-hidden scroll-smooth">
        {teamMembers.map(({ title, image, alt, subtitle, description }, idx) => (
          <div key={idx} className="w-1/4 flex-none px-1 max-2xl:w-1/3 max-lg:w-1/2 max-sm:w-full" ref={cardRef}>
            <TeamCard title={title} image={image} alt={alt} subtitle={subtitle} description={description} />
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button onClick={scrollRight} className="absolute right-0 top-1/2 z-10">
        <ArrowRightCircleIcon className="h-10 w-10 text-white max-md:h-6 max-md:w-6" />
      </button>
    </div>
  );
}
