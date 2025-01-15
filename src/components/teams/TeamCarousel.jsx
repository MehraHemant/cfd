'use client';

import { teamMembers } from '@/data/teamMembers';
import { useRef } from 'react';
import { TeamCard } from './TeamCard';

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
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 z-10 aspect-square -translate-y-1/2 transform rounded-full border border-white bg-gray-500/40 px-2 align-middle text-2xl/snug text-white"
      >
        &#8592;
      </button>

      {/* Carousel */}
      <div ref={carouselRef} className="flex snap-x snap-mandatory overflow-hidden scroll-smooth">
        {teamMembers.map(({ title, image, alt, subtitle, description }, idx) => (
          <div key={idx} className="w-fit flex-none px-1" ref={cardRef}>
            <TeamCard title={title} image={image} alt={alt} subtitle={subtitle} description={description} />
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 z-10 aspect-square -translate-y-1/2 transform rounded-full border border-white bg-gray-500/40 px-2 align-middle text-2xl/snug text-white"
      >
        {' '}
        &#8594;
      </button>
    </div>
  );
}
