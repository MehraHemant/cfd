import { BenefitCard } from "@/components/benefits";
import { Carousel } from "@/components/Carousel";
import { CaseStudy } from "@/components/caseStudy/CaseStudy";
import { Heading } from "@/components/Heading";
import { HeroSection } from "@/components/HeroSection";
import { Polygon } from "@/components/ui/polygon";
import { benefitCardData } from "@/data/benefits";
import Image from "next/image";

export const metadata = {
  title: "About | Chalti Firti Dukan",
  description: "Generated by create next app",
};

export default function About() {
  const slides = ["/images/store_view.jpg", "/images/Presentation.jpg", "/images/Presentation (1).jpg"];
  return (
    <>
      <section className="bg-primary pt-4">
        <Heading title={"Humari Pehchan"} />
        <HeroSection />
      </section>
      <Polygon className={"bg-white"} />
      <section>
        <Heading title={"Store Inside View"} primary />
        <div className="px-10">
          <Carousel slides={slides} intervalTime={3000} />
        </div>
      </section>
      <Polygon reverse className={"bg-white"} />
      <section className="bg-primary py-4">
        <Heading title={"Benefits"} />
        <div className="mx-auto grid max-w-screen-lg grid-cols-3 gap-4 px-4 pt-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {benefitCardData.map(
            ({ title, description, image, backgroundColor }) => (
              <BenefitCard
                key={title}
                title={title}
                description={description}
                image={image}
                background={backgroundColor}
              />
            )
          )}
        </div>
      </section>
      <Polygon />
      <CaseStudy />
      <section id="costing-plan" className="bg-secondary pt-10">
        <Heading title={"costing plan"} primary />
        <div className="flex max-sm:flex-col max-sm:items-center gap-x-4 gap-y-2 max-w-4xl pt-3 pb-10 max-sm:pt-0 max-sm:pb-4 max-sm:px-0 px-4 mx-auto">
        <Image priority width={400} height={400} src="/images/Package 1.png" className="w-1/2 max-sm:w-4/5 object-cover" alt="package-1"/>
        <Image priority width={400} height={400} src="/images/Package 2.png" className="w-1/2 max-sm:w-4/5 object-cover" alt="package-2"/>
      </div>
      </section>
    </>
  );
}
