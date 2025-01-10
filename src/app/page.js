"use client";
import { Carousel } from "@/components/Carousel";
import { Heading } from "@/components/Heading";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/service";
import { TeamCard } from "@/components/teams/TeamCard";
import { Polygon } from "@/components/ui/polygon";
import { teamMembers } from "@/data/teamMembers";
// import { DoubleQuotesIcon } from "@/icons/DoubleQuotesIcon";
import { useState } from "react";

export default function Home() {
  
  const [inputs, setInputs] = useState({name:"", phone:"",email:"", message:""});
  const {name, phone, email, message} = inputs;
  const handleInputChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // sendMail(email, message, "Email Sent Successfully");
  };
  const HeroCarouselSlides = [
    "/images/gadi.png",
    "/images/glow_on_wheels.png",
    "/images/gadi.png",
    "/images/glow_on_wheels.png",
  ];
  const teamLength = teamMembers.length - 1;
  const [currentIndex, setCurrentIndex] = useState(0);
  const onRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamLength ? 0 : prevIndex + 1
    );
  };
  const onLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamLength : prevIndex - 1
    );
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary">
        <Carousel slides={HeroCarouselSlides} />
        <Heading title={"Humari Pehchan"} />
        <HeroSection />
      </section>
      <Polygon />

      <section className="bg-secondary flex w-full justify-center px-4 py-6">
        <img
          src="images/glow_on_wheels.png"
          className="w-full"
          alt="gadi details"
        />
      </section>
      <Polygon reverse />

      {/* <!-- TEAM section --> */}
      <section className="bg-primary px-36 py-10 max-lg:px-8 max-md:px-1">
        <div className="flex flex-col items-center gap-3 pb-6 max-lg:gap-2 max-md:gap-1">
          <Heading title={"Teams"} />
          <div className="relative px-10 max-md:px-4 w-full">
            <button
              className="absolute rounded-full aspect-square text-black bg-white/60 px-2 text-2xl z-10 align-middle left-0 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={onLeftClick}
            >
              &lt;
            </button>
            <button
              className="absolute rounded-full aspect-square text-black bg-white/60 px-2 text-2xl z-10 align-middle right-0 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={onRightClick}
            >
              &gt;
            </button>
            <div className="flex w-full gap-x-4 max-md:gap-x-2 relative overflow-hidden justify-center px-4 py-2">
              {currentIndex === 0 ? (
                <TeamCard
                  title={teamMembers[teamLength].title}
                  description={teamMembers[teamLength].description}
                  image={teamMembers[teamLength].image}
                  alt={teamMembers[teamLength].alt}
                  subtitle={teamMembers[teamLength].subtitle}
                />
              ) : (
                <TeamCard
                  title={teamMembers[currentIndex - 1].title}
                  description={teamMembers[currentIndex - 1].description}
                  image={teamMembers[currentIndex - 1].image}
                  alt={teamMembers[currentIndex - 1].alt}
                  subtitle={teamMembers[currentIndex - 1].subtitle}
                />
              )}
              <TeamCard
                active
                title={teamMembers[currentIndex].title}
                description={teamMembers[currentIndex].description}
                image={teamMembers[currentIndex].image}
                alt={teamMembers[currentIndex].alt}
                subtitle={teamMembers[currentIndex].subtitle}
              />
              {currentIndex === teamLength ? (
                <TeamCard
                  title={teamMembers[0].title}
                  description={teamMembers[0].description}
                  image={teamMembers[0].image}
                  alt={teamMembers[0].alt}
                  subtitle={teamMembers[0].subtitle}
                />
              ) : (
                <TeamCard
                  title={teamMembers[currentIndex + 1].title}
                  description={teamMembers[currentIndex + 1].description}
                  image={teamMembers[currentIndex + 1].image}
                  alt={teamMembers[currentIndex + 1].alt}
                  subtitle={teamMembers[currentIndex + 1].subtitle}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <Polygon />

      {/* Services Section */}
      <section
        id="services"
        className="bg-secondary px-40 py-8 pb-10 max-lg:px-10 max-md:px-2"
      >
        <Heading title={"Services"} primary />

        <div className="grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <ServiceCard
            className={"bg-blue-900"}
            iconClassName={"bg-blue-950"}
            title={"CFD"}
            description={
              "Your brand on wheels bringing businesses closer to customers with mobile promotion like never before."
            }
            icon={"/images/icons/logo.png"}
            link={"/about"}
          />
          <ServiceCard
            className={"bg-cyan-700"}
            iconClassName={"bg-cyan-800"}
            title={"BTL"}
            description={
              "Directly engage your audience with personalized, on-ground marketing solutions that leave a lasting impression."
            }
            icon={"/images/icons/market-research.png"}
            link={"/services-btl"}
          />
          <ServiceCard
            className={"bg-purple-800"}
            iconClassName={"bg-purple-900"}
            title={"ATL"}
            description={
              "Reach your masses with high impact strategic campaigns across a variety of media channels"
            }
            icon={"/images/icons/video-editing.png"}
            link={"/services-atl"}
          />
          <ServiceCard
            className={"bg-amber-700"}
            iconClassName={"bg-amber-800"}
            title={"Digital"}
            description={
              "Amplify your brand's presence online with cutting-edge digital marketing strategies that connect and convert."
            }
            icon={"/images/icons/social-media.png"}
            link={"/services-atl"}
          />
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-12 max-md:mt-3 max-md:gap-x-4 max-sm:gap-y-2">
          <img
            src="/images/logo/Expand.png"
            className="max-w-xs object-contain  mx-auto max-lg:max-w-64 max-md:max-w-32"
            alt="expand"
          />
          <img
            src="/images/logo/Explore.png"
            className="mt-6 max-w-xs  mx-auto object-contain max-md:mt-2 max-md:max-w-32"
            alt="explore"
          />
          <img
            src="/images/logo/Experience.png"
            className="max-w-xs mx-auto object-contain max-md:max-w-32"
            alt="experience"
          />
        </div>
        <h2 className="mx-auto mt-4 w-fit text-xl max-md:text-base">
          with
          <span className="text-primary text-2xl font-bold uppercase leading-tight max-md:text-xl">
            vistaar media
          </span>
        </h2>
      </section>

      {/* Testimonial Section */}
      <Polygon reverse />
      <section
        id="testimonial"
        className="bg-primary flex flex-col items-center px-40 py-10 max-lg:px-10 max-md:px-6"
      >
        <Heading title={"testimonial"} />
        <div className="bg-secondary shadow-2 text-primary relative flex w-full max-w-2xl flex-col rounded-bl-[80px] rounded-tr-[80px] py-6 font-medium max-lg:max-w-lg">
          <p className="px-12 text-xl/7 font-normal max-lg:text-lg/6 max-md:px-6 max-sm:text-sm/4">
            Chalti Firti Dukaan brought Avon Cycles right to the heart of Odisha
            with their innovative mobile campaign. Their team executed the
            campaign flawlessly, helping us connect with new customers and grow
            brand awareness across the state.
          </p>
          <h5 className="mt-3 pr-8 text-right text-lg/4 italic max-sm:text-sm/4">
            - Avon Cycles Team
          </h5>
          <h5 className="pr-8 text-right text-lg italic max-sm:text-sm/4">
            (Odisha Campaign)
          </h5>
          <span className="absolute -right-5 bottom-10 flex aspect-square w-10 items-center justify-center rounded-full border bg-white text-4xl font-didact">
            {/* <DoubleQuotesIcon /> */}
          </span>
        </div>
      </section>

      <div className="h-28 bg-white max-lg:h-10">
        <div className="across bg-primary h-full"></div>
      </div>

      {/* Clients Section */}
      <section id="clients" className="bg-white pb-4">
        <Heading title={"Clients"} primary />
        <div className="*:object-fit *:grow-1 border-primary mx-auto mt-4 flex max-w-screen-lg flex-wrap items-center justify-center gap-12 rounded-2xl border px-6 py-8 *:w-40 max-md:mx-2 max-md:py-4 max-sm:gap-x-4 max-sm:gap-y-2.5 max-sm:px-3 max-sm:*:w-1/4">
          <img src="/images/clients/avon_cycles.png" alt="avon-cycles" />
          <img src="/images/clients/bonn.png" alt="bonn" />
          <img src="/images/clients/kurlon.png" alt="kurlon" />
          <img src="/images/clients/rungtas.png" alt="rungtas" />
          <img src="/images/clients/lqintimo.png" alt="lqintimo" />
          <img src="/images/clients/myntra.png" alt="myntra" />
          <img src="/images/clients/bazaar_kolkata.png" alt="bazaar-kolkata" />
          <img src="/images/clients/ikea.png" alt="ikea" />
          <img src="/images/clients/livfast.png" alt="livfast" />
          <img src="/images/clients/girdhar.png" alt="girdhar" />
          <img src="/images/clients/colorbar.png" alt="colorbar" />
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" class="bg-white py-8 relative">
      <img src="/images/icons/Vector.png" class="absolute -bottom-3 max-md:hidden left-10" alt="vector" />
      <img src="/images/icons/Phone.png" class="absolute -bottom-28 right-40 max-md:hidden max-lg:right-24 max-sm:right-8 w-20"
        alt="vector" />
        <Heading title={"Contact us"} primary />
        <div className="my-6 text-center text-3xl italic text-black max-lg:text-2xl max-md:text-lg max-sm:my-2 max-sm:px-px">
          <h5 className="text-xl/5 font-bold max-sm:text-base/4">
            Ready to take your brand on the move?
          </h5>
          <h5 className="pt-4 text-lg/5 max-sm:pt-2 max-sm:text-base/4">
            Let&apos;s connect and make it happen!
          </h5>
        </div>
        <form onSubmit={()=>sendMail(email, "this is an testing email", "Email Sent Successfully")} className="bg-primary mx-auto flex max-w-lg flex-col gap-4 px-8 py-12 text-black max-md:px-8 max-sm:px-3 max-sm:text-sm">
          <div className="flex items-center">
            <label htmlFor="name" className="basis-28 text-slate-200">
              Name
            </label>
            <input
              type="name"
              onChange={handleInputChange}
              value={inputs.name}
              name="name"
              placeholder="Enter your Full Name"
              className="input-field"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="phone" className="basis-28 text-slate-200">
              Phone No.
            </label>
            <input
              type="tel"
              onChange={handleInputChange}
              value={inputs.phone}
              name="phone"
              placeholder="Enter your Mobile Number"
              className="input-field"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="email" className="basis-28 text-slate-200">
              Email ID
            </label>
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              value={inputs.email}
              placeholder="Enter your email address"
              className="input-field"
            />
          </div>
          <div className="flex items-start">
            <label htmlFor="message" className="basis-28 text-slate-200">
              Message
            </label>
            <textarea
              name="message"
              onChange={handleInputChange}
              value={inputs.message}
              placeholder="Enter your message here"
              className="input-field"
            ></textarea>
          </div>
          <button
            type="submit"
            className="primary-btn ms-24 mt-3 rounded-md text-slate-200"
          >
            Submit
          </button>
        </form>
      </section>
      <Polygon reverse className={'bg-white'} />
    </div>
  );
}
