"use client";

import { useState } from "react";
import { Heading } from "../Heading";
import { twMerge } from "tailwind-merge";

export function CaseStudy() {
  const caseStudy = [
    "Brand Enhancement",
    "brand exposure",
    "Innovating Marketing",
  ];

  const handleNextClick = () => {
    currentIndex === caseStudy.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  const handlePrevClick = () => {
    currentIndex === 0 ? setCurrentIndex(caseStudy.length - 1) : setCurrentIndex(currentIndex - 1);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="bg-secondary" id="case-study">
      <Heading title={"case study"} primary />
      <div
        id="slider"
        className="py-6 flex w-full items-center justify-center gap-4"
      >
        <img
          id="prev"
          src="/images/icons/left-arrow.png"
          className="w-7 cursor-pointer"
          alt="left-arrow"
          onClick={handlePrevClick}
        />
        <div className="relative w-56 flex justify-start overflow-hidden">
          <div
            id="carousel"
            style={{ translate: `-${224 * (currentIndex)}px` }}
            className={twMerge("relative top-0 flex w-full transition-all duration-500")}
          >
              {caseStudy.map((title) => (
                <div key={title} className="case-study-card slide w-52 px-2">
                  {title}
                </div>
              ))}
          </div>
        </div>
        <img
          id="next"
          src="/images/icons/left-arrow.png"
          className="w-7 rotate-180 cursor-pointer"
          alt="right-arrow"
          onClick={handleNextClick}
        />
      </div>
      <div id="image-wrapper" className="relative mx-auto py-4 w-full max-w-4xl overflow-hidden">
        <div id="image-slider" className="flex w-full">
          <div id="brand-enhancement" className={twMerge("grid w-full grid-cols-3 gap-6 px-4 py-2 *:rounded-md max-sm:grid-cols-2 max-sm:gap-3", (currentIndex == 0) ? 'grid': 'hidden' )}>
            <img src="/images/case_study/brand_enhancement_(1).jpg" alt="brand_enhancement_1" className="aspect-[4/3] object-cover object-center shadow-md shadow-black/40" />
            <img src="/images/case_study/brand_enhancement_(3).jpeg" alt="brand_enhancement_3" className="aspect-[4/3] object-cover object-center shadow-md shadow-black/40" />
            <img src="/images/case_study/brand_enhancement_(4).jpeg" alt="brand_enhancement_4" className="aspect-[4/3] object-cover object-center shadow-md shadow-black/40" />
            <img src="/images/case_study/brand_enhancement_(5).jpeg" alt="brand_enhancement_5" className="aspect-[4/3] object-cover object-center shadow-md shadow-black/40" />
            <img src="/images/case_study/brand_enhancement_(6).jpeg" alt="brand_enhancement_6" className="aspect-[4/3] object-cover object-center shadow-md shadow-black/40" />
            <img src="/images/case_study/brand_enhancement_(7).jpeg" alt="brand_enhancement_7" className="aspect-[4/3] object-cover object-center shadow-md shadow-black/40" />
          </div>

          <div id="brand-exposure" className={twMerge("grid w-full grid-cols-3 gap-6 px-4 py-2 *:rounded-md max-sm:grid-cols-2 max-sm:gap-3", (currentIndex == 1) ? 'grid': 'hidden' )}>
            <img src="/images/case_study/brand_exposure_(1).jpg" alt="brand_exposure_1" className="aspect-[4/3] object-cover object-bottom shadow-md shadow-black/40" />
            <img src="/images/case_study/brand_exposure_(3).jpg" alt="brand_exposure_3" className="aspect-[4/3] object-cover object-bottom shadow-md shadow-black/40" />
            <img src="/images/case_study/brand_exposure_(4).jpg" alt="brand_exposure_4" className="aspect-[4/3] object-cover object-bottom shadow-md shadow-black/40" />
            <img src="/images/case_study/brand_exposure_(5).jpg" alt="brand_exposure_5" className="aspect-[4/3] object-cover object-bottom shadow-md shadow-black/40" />
            <img src="/images/case_study/brand_exposure_(6).jpg" alt="brand_exposure_6" className="aspect-[4/3] object-cover object-bottom shadow-md shadow-black/40" />
            <img src="/images/case_study/brand_exposure_(7).jpg" alt="brand_exposure_7" className="aspect-[4/3] object-cover object-bottom shadow-md shadow-black/40" />
          </div>
          <div id="brand-innovating_marketing" className={twMerge("grid w-full grid-cols-3 gap-6 px-4 py-2 *:rounded-md max-sm:grid-cols-2 max-sm:gap-3", (currentIndex == 2) ? 'grid': 'hidden' )}>
            <img src="/images/case_study/innovating_marketing_(1).jpg" alt="innovating_marketing_1" className="aspect-[4/3] object-cover object-bottom shadow-md shadow-black/40" />
            <img src="/images/case_study/innovating_marketing_(2).jpg" alt="innovating_marketing_2" className="aspect-[4/3] object-cover object-bottom shadow-md shadow-black/40" />
            <img src="/images/case_study/innovating_marketing_(3).jpg" alt="innovating_marketing_3" className="aspect-[4/3] object-cover object-bottom shadow-md shadow-black/40" />
            <img src="/images/case_study/innovating_marketing_(4).jpg" alt="innovating_marketing_4" className="aspect-[4/3] object-cover object-bottom shadow-md shadow-black/40" />
            <img src="/images/case_study/innovating_marketing_(5).jpg" alt="innovating_marketing_5" className="aspect-[4/3] object-cover object-bottom shadow-md shadow-black/40" />
            <img src="/images/case_study/innovating_marketing_(6).jpg" alt="innovating_marketing_6" className="aspect-[4/3] object-cover object-bottom shadow-md shadow-black/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
