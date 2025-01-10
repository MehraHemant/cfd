import { Heading } from "@/components/Heading";
import { ServicePageCard } from "@/components/service/ServicesPageCard";
import { dmServicesData } from "@/data/dmServices";

export const metadata = {
    title: "DM Services | Chalti Firti Dukan",
    description: "Generated by create next app",
  };

export default function DMServices() {
    
  return (
    <>
      <section className="bg-primary py-10 text-white max-md:py-4 max-sm:py-2">
        <Heading title={"Digital-Marketing"} />
        <div className="mx-auto max-w-xl px-2 text-center text-3xl max-lg:text-xl">
          From{" "}
          <span className="font-rubik text-4xl font-thin uppercase max-lg:text-2xl max-md:text-xl">
            Marketing Strategy{" "}
          </span>
          to ad{" "}
          <span className="font-rubik text-4xl font-thin uppercase max-lg:text-2xl max-md:text-xl">
            optimization
          </span>
        </div>
      </section>
      <section className="bg-primary flex flex-col text-white">
        {dmServicesData.map(({title, subtitle, description, imgSrc, imgAlt, listItems}, idx) => (
          <ServicePageCard
            rev={idx % 2 !== 0}
            key={title}
            title={title}
            subtitle={subtitle}
            description={description}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            listItem={listItems}
          />
        ))}
      </section>
    </>
  );
}
