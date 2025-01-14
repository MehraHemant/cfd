'use client';

import { useState } from 'react';
import { Heading } from '../Heading';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { caseStudies } from '@/data/caseStudy';
import { Button } from '../ui/Button';

export function CaseStudy() {
  const caseStudy = ['Brand Enhancement', 'brand exposure', 'Innovating Marketing'];
  const [showAll, setShowAll] = useState(false);

  const handleNextClick = () => {
    currentIndex === caseStudy.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
  };

  const handlePrevClick = () => {
    currentIndex === 0 ? setCurrentIndex(caseStudy.length - 1) : setCurrentIndex(currentIndex - 1);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="bg-secondary" id="case-study">
      <Heading title={'case study'} primary />
      <div id="slider" className="flex w-full items-center justify-center gap-4 py-6 max-sm:gap-2">
        <Image priority width={300} height={300} id="prev" src="/images/icons/left-arrow.png" className="w-7 cursor-pointer" alt="left-arrow" onClick={handlePrevClick} />
        <div className="relative flex w-56 justify-start overflow-hidden">
          <div id="carousel" style={{ translate: `-${224 * currentIndex}px` }} className={twMerge('relative top-0 flex w-full transition-all duration-500')}>
            {caseStudy.map((title) => (
              <div key={title} className="case-study-card slide w-52 px-2">
                {title}
              </div>
            ))}
          </div>
        </div>
        <Image
          priority
          width={300}
          height={300}
          id="next"
          src="/images/icons/left-arrow.png"
          className="w-7 rotate-180 cursor-pointer"
          alt="right-arrow"
          onClick={handleNextClick}
        />
      </div>
      <div id="image-wrapper" className="relative mx-auto w-full max-w-6xl overflow-hidden py-4">
        <div id="image-slider" className="flex w-full flex-col">
          <div
            id="brand-enhancement"
            className={twMerge('grid w-full grid-cols-3 gap-6 px-4 py-2 *:rounded-md max-sm:grid-cols-2 max-sm:gap-3', currentIndex == 0 ? 'grid' : 'hidden')}
          >
            {(showAll ? caseStudies.brandEnhancement : caseStudies.brandEnhancement.slice(0, 9)).map(({ src, alt }) => (
              <Image priority width={300} key={alt} height={300} src={src} alt={alt} className="aspect-[4/3] w-full object-cover object-center shadow-md shadow-black/40" />
            ))}
          </div>

          <div
            id="brand-exposure"
            className={twMerge('grid w-full grid-cols-3 gap-6 px-4 py-2 *:rounded-md max-sm:grid-cols-2 max-sm:gap-3', currentIndex == 1 ? 'grid' : 'hidden')}
          >
            {(showAll ? caseStudies.brandExposure : caseStudies.brandExposure.slice(0, 9)).map(({ src, alt }) => (
              <Image priority width={300} key={alt} height={300} src={src} alt={alt} className="aspect-[4/3] w-full object-cover object-center shadow-md shadow-black/40" />
            ))}
          </div>
          <div
            id="brand-innovating_marketing"
            className={twMerge('grid w-full grid-cols-3 gap-6 px-4 py-2 *:rounded-md max-sm:grid-cols-2 max-sm:gap-3', currentIndex == 2 ? 'grid' : 'hidden')}
          >
            <Image
              priority
              width={300}
              height={300}
              src="/images/case_study/innovating_marketing_(1).jpg"
              alt="innovating_marketing_1"
              className="aspect-[4/3] w-full object-cover object-bottom shadow-md shadow-black/40"
            />
            <Image
              priority
              width={300}
              height={300}
              src="/images/case_study/innovating_marketing_(2).jpg"
              alt="innovating_marketing_2"
              className="aspect-[4/3] w-full object-cover object-bottom shadow-md shadow-black/40"
            />
            <Image
              priority
              width={300}
              height={300}
              src="/images/case_study/innovating_marketing_(3).jpg"
              alt="innovating_marketing_3"
              className="aspect-[4/3] w-full object-cover object-bottom shadow-md shadow-black/40"
            />
            <Image
              priority
              width={300}
              height={300}
              src="/images/case_study/innovating_marketing_(4).jpg"
              alt="innovating_marketing_4"
              className="aspect-[4/3] w-full object-cover object-bottom shadow-md shadow-black/40"
            />
            <Image
              priority
              width={300}
              height={300}
              src="/images/case_study/innovating_marketing_(5).jpg"
              alt="innovating_marketing_5"
              className="aspect-[4/3] w-full object-cover object-bottom shadow-md shadow-black/40"
            />
            <Image
              priority
              width={300}
              height={300}
              src="/images/case_study/innovating_marketing_(6).jpg"
              alt="innovating_marketing_6"
              className="aspect-[4/3] w-full object-cover object-bottom shadow-md shadow-black/40"
            />
          </div>
          <div className="mt-4 flex w-full justify-center">
            <Button onClick={() => setShowAll((prev) => !prev)} className="border-black bg-white/80 font-medium text-black border-none hover:bg-white/80">
              {showAll ? 'Show Less' : 'Show More'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
