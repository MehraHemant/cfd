'use client';

import { useRef, useState } from 'react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@/icons';
import { caseStudies } from '@/data/caseStudy';
import { Heading } from '../Heading';
import { Modal } from '../ui/modal';
import Image from 'next/image';

function CaseStudyCard({ img, brand }) {
  return (
    <div className="group flex flex-col gap-6 rounded-br-3xl rounded-tl-3xl bg-white bg-white/60 p-8">
      <div className="relative">
        <Image src={img} priority className="relative z-10 w-full" alt="case study" width={300} height={300} />
        <div className={`absolute -left-2 -top-2 z-0 h-1/2 w-1/2 bg-primary transition-all duration-300 group-hover:translate-x-[calc(100%+16px)] group-hover:bg-secondary`} />
        <div className="absolute -bottom-2 -right-2 z-0 h-1/2 w-1/2 bg-secondary transition-all duration-300 group-hover:-translate-x-[calc(100%+16px)] group-hover:bg-primary" />
      </div>
      <h2 className="text-center text-lg font-bold uppercase">{brand}</h2>
    </div>
  );
}

export function CaseStudy() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
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
    <section className="relative w-full bg-secondary px-36 py-10 max-lg:px-8 max-md:px-1" id="case-study">
      <Heading title={'case study'} primary />
      <div className="relative w-full overflow-hidden px-12 py-8 max-sm:px-4">
        {/* Left Button */}
        <button onClick={scrollLeft} className="absolute left-0 top-1/2 z-10">
          <ArrowLeftCircleIcon className="h-10 w-10 text-white max-md:h-6 max-md:w-6" />
        </button>

        {/* Carousel */}
        <div ref={carouselRef} className="flex snap-x snap-mandatory overflow-hidden scroll-smooth">
          {caseStudies.map((item, idx) => (
            <div
              key={idx}
              className="w-1/4 flex-none px-1 max-2xl:w-1/3 max-lg:w-1/2 max-sm:w-full"
              onClick={() => {
                setShowModal((prev) => !prev), setData(item);
              }}
              ref={cardRef}
            >
              <CaseStudyCard img={item.img} brand={item.brand} />
            </div>
          ))}
          <Modal
            show={showModal}
            onClick={() => setShowModal((prev) => !prev)}
            brand={data.brand}
            img={data.img}
            objective={data.objective}
            location={data.location}
            duration={data.duration}
            outcome={data.outcome}
          />
        </div>

        {/* Right Button */}
        <button onClick={scrollRight} className="absolute right-0 top-1/2 z-10">
          <ArrowRightCircleIcon className="h-10 w-10 text-white max-md:h-6 max-md:w-6" />
        </button>
      </div>
    </section>
  );
}
