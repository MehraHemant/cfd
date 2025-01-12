import { twMerge } from "tailwind-merge";
import { ServiceCardButton } from "./ServiceCardButton";
import Image from "next/image";

export function ServiceCard({ title, description, icon, link, className, iconClassName }) {
  return (
    <div
      className={twMerge(
        `flex min-w-40 flex-col items-center justify-between gap-10 text-white px-6 py-10 max-md:gap-4 max-md:px-4 max-md:py-6 max-sm:gap-2`,
        className
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <div className={twMerge("w-fit rounded-full p-1", iconClassName)}>
          <Image priority width={150} height={150}
            className="aspect-square w-12 object-contain p-2"
            src={icon}
            alt={icon}
          />
        </div>
        <h3 className="card-heading">{title}</h3>
        <p className="card-desc"> {description} </p>
      </div>
      <ServiceCardButton link={link} />
    </div>
  );
}
