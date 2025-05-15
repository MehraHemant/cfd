'use client';
import { TeamCarousel } from '@/components';
import { Carousel } from '@/components/Carousel';
import { Heading } from '@/components/Heading';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/service';
import { TeamCard } from '@/components/teams/TeamCard';
import { Polygon } from '@/components/ui/polygon';
import { teamMembers } from '@/data/teamMembers';
import { DoubleQuotesIcon } from '@/icons';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const HeroCarouselSlides = ['/images/landing_banner.jpg', '/videos/landing-video.mp4', '/images/gadi.png'];
  const [inputs, setInputs] = useState({ name: '', phone: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary">
        <Carousel slides={HeroCarouselSlides} />
        <Heading title={'Humari Pehchan'} />
        <HeroSection />
      </section>
      <Polygon />

      <section className="flex w-full justify-center bg-secondary px-4 py-6">
        <Image priority width={2000} height={2000} src="/images/glow_on_wheels.png" className="w-full" alt="gadi details" />
      </section>
      <Polygon reverse />

      {/* <!-- TEAM section --> */}
      <section className="bg-primary px-36 py-10 max-lg:px-8 max-md:px-1">
        <div className="flex flex-col items-center gap-3 pb-6 max-lg:gap-2 max-md:gap-1">
          <Heading title={'Teams'} />
        </div>
        <TeamCarousel />
      </section>

      <Polygon />

      {/* Services Section */}
      <section id="services" className="bg-secondary px-40 py-8 pb-10 max-lg:px-10 max-md:px-2">
        <Heading title={'Services'} primary />

        <div className="grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <ServiceCard
            className={'bg-blue-900'}
            iconClassName={'bg-blue-950'}
            title={'CFD'}
            description={'Your brand on wheels bringing businesses closer to customers with mobile promotion like never before.'}
            icon={'/images/icons/logo.png'}
            link={'/about#case-study'}
          />
          <ServiceCard
            className={'bg-cyan-700'}
            iconClassName={'bg-cyan-800'}
            title={'BTL'}
            description={'Directly engage your audience with personalized, on-ground marketing solutions that leave a lasting impression.'}
            icon={'/images/icons/market-research.png'}
            link={'/btlServices'}
          />
          <ServiceCard
            className={'bg-purple-800'}
            iconClassName={'bg-purple-900'}
            title={'ATL'}
            description={'Reach your masses with high impact strategic campaigns across a variety of media channels'}
            icon={'/images/icons/video-editing.png'}
            link={'/atlServices'}
          />
          <ServiceCard
            className={'bg-amber-700'}
            iconClassName={'bg-amber-800'}
            title={'Digital'}
            description={"Amplify your brand's presence online with cutting-edge digital marketing strategies that connect and convert."}
            icon={'/images/icons/social-media.png'}
            link={'/dmServices'}
          />
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-12 max-md:mt-3 max-md:gap-x-4 max-sm:gap-y-2">
          <Image priority width={400} height={400} src="/images/logo/Expand.png" className="mx-auto w-full max-w-xs object-contain max-lg:max-w-64 max-md:max-w-32" alt="expand" />
          <Image
            priority
            width={400}
            height={400}
            src="/images/logo/Explore.png"
            className="mx-auto mt-6 w-full max-w-xs object-contain max-md:mt-2 max-md:max-w-32"
            alt="explore"
          />
          <Image priority width={400} height={400} src="/images/logo/Experience.png" className="mx-auto w-full max-w-xs object-contain max-md:max-w-32" alt="experience" />
        </div>
        <h2 className="mx-auto mt-4 w-fit text-xl max-md:text-base">
          with
          <span className="text-2xl font-bold uppercase leading-tight text-primary max-md:text-xl">vistaar media</span>
        </h2>
      </section>

      {/* Testimonial Section */}
      <Polygon reverse />
      <section id="testimonial" className="flex flex-col items-center bg-primary px-40 py-10 max-lg:px-10 max-md:px-6">
        <Heading title={'testimonial'} />
        <div className="shadow-2 relative flex w-full max-w-2xl flex-col rounded-bl-[80px] rounded-tr-[80px] bg-secondary py-6 font-medium text-primary max-lg:max-w-lg">
          <p className="px-12 text-xl/7 font-normal max-lg:text-lg/6 max-md:px-6 max-sm:text-sm/4">
            Chalti Firti Dukaan brought Avon Cycles right to the heart of Odisha with their innovative mobile campaign. Their team executed the campaign flawlessly, helping us
            connect with new customers and grow brand awareness across the state.
          </p>
          <h5 className="mt-3 pr-8 text-right text-lg/4 italic max-sm:text-sm/4">- Avon Cycles Team</h5>
          <h5 className="pr-8 text-right text-lg italic max-sm:text-sm/4">(Odisha Campaign)</h5>
          <span className="absolute -right-5 bottom-10 flex aspect-square w-10 h-10 items-center justify-center rounded-full border bg-white font-didact text-4xl">
            <DoubleQuotesIcon width={26} height={26} />
          </span>
        </div>
      </section>

      <div className="h-28 bg-white max-lg:h-10">
        <div className="across h-full bg-primary"></div>
      </div>

      {/* Clients Section */}
      <section id="clients" className="bg-white pb-4">
        <Heading title={'Clients'} primary />
        <div className="*:object-fit *:grow-1 mx-auto mt-4 flex max-w-screen-lg flex-wrap items-center justify-center gap-12 rounded-2xl border border-primary px-6 py-8 *:w-40 max-md:mx-2 max-md:py-4 max-sm:gap-x-4 max-sm:gap-y-2.5 max-sm:px-3 max-sm:*:w-1/4">
          <Image priority width={100} height={100} src="/images/clients/avon_cycles.png" alt="avon-cycles" />
          <Image priority width={100} height={100} src="/images/clients/bonn.png" alt="bonn" />
          <Image priority width={100} height={100} src="/images/clients/kurlon.png" alt="kurlon" />
          <Image priority width={100} height={100} src="/images/clients/rungtas.png" alt="rungtas" />
          <Image priority width={100} height={100} src="/images/clients/lqintimo.png" alt="lqintimo" />
          <Image priority width={100} height={100} src="/images/clients/myntra.png" alt="myntra" />
          <Image priority width={100} height={100} src="/images/clients/bazaar_kolkata.png" alt="bazaar-kolkata" />
          <Image priority width={100} height={100} src="/images/clients/ikea.png" alt="ikea" />
          <Image priority width={100} height={100} src="/images/clients/livfast.png" alt="livfast" />
          <Image priority width={100} height={100} src="/images/clients/girdhar.png" alt="girdhar" />
          <Image priority width={100} height={100} src="/images/clients/colorbar.png" alt="colorbar" />
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="relative bg-white py-8">
        <Image priority width={100} height={100} src="/images/icons/Vector.png" className="absolute -bottom-3 left-10 max-md:hidden" alt="vector" />
        <Image
          priority
          width={100}
          height={100}
          src="/images/icons/Phone.png"
          className="absolute -bottom-28 right-40 w-20 max-lg:right-24 max-md:hidden max-sm:right-8"
          alt="vector"
        />
        <Heading title={'Contact us'} primary />
        <div className="my-6 text-center text-3xl italic text-black max-lg:text-2xl max-md:text-lg max-sm:my-2 max-sm:px-px">
          <h5 className="text-xl/5 font-bold max-sm:text-base/4">Ready to take your brand on the move?</h5>
          <h5 className="pt-4 text-lg/5 max-sm:pt-2 max-sm:text-base/4">Let&apos;s connect and make it happen!</h5>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-lg flex-col gap-4 bg-primary px-8 py-12 text-black max-md:px-8 max-sm:px-3 max-sm:text-sm">
          <div className="flex items-center">
            <label htmlFor="name" className="basis-28 text-slate-200">
              Name
            </label>
            <input type="name" onChange={handleInputChange} value={inputs.name} name="name" placeholder="Enter your Full Name" className="input-field" />
          </div>
          <div className="flex items-center">
            <label htmlFor="phone" className="basis-28 text-slate-200">
              Phone No.
            </label>
            <input type="tel" onChange={handleInputChange} value={inputs.phone} name="phone" placeholder="Enter your Mobile Number" className="input-field" />
          </div>
          <div className="flex items-center">
            <label htmlFor="email" className="basis-28 text-slate-200">
              Email ID
            </label>
            <input type="email" name="email" onChange={handleInputChange} value={inputs.email} placeholder="Enter your email address" className="input-field" />
          </div>
          <div className="flex items-start">
            <label htmlFor="message" className="basis-28 text-slate-200">
              Message
            </label>
            <textarea name="message" onChange={handleInputChange} value={inputs.message} placeholder="Enter your message here" className="input-field"></textarea>
          </div>
          <button type="submit" className="primary-btn ms-24 mt-3 rounded-md text-slate-200">
            Submit
          </button>
        </form>
      </section>
      <Polygon reverse className={'bg-white'} />
    </div>
  );
}
