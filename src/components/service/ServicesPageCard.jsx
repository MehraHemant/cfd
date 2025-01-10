import { twMerge } from "tailwind-merge";

export function ServicePageCard({
  imgSrc,
  imgAlt,
  title,
  subtitle,
  description,
  rev,
  listItem,
}) {
  return (
    <div
      className={twMerge(
        "mx-auto flex max-w-7xl items-center py-3 max-lg:flex-col",
        rev ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div className="max-w-xl w-full p-8 max-lg:p-6">
        <img src={imgSrc} className="aspect-video object-cover object-top" alt={imgAlt} />
      </div>
      <div className="col-span-2 w-full text-center">
        <div className="mb-2 flex flex-col items-center gap-2 max-lg:gap-2 max-md:gap-1">
          <h2 className="font-rubik drop-1 text-4xl uppercase leading-none max-lg:text-3xl max-md:text-[28px] max-sm:px-2">
            {title}
          </h2>
          <div className="max h-0.5 w-52 bg-white max-lg:h-px max-lg:w-40"></div>
        </div>
        <h3 className="px-4 text-center text-lg/tight font-medium capitalize italic max-sm:px-2">
          {subtitle}
        </h3>
        <p className="mt-5 px-8 text-center text-xl max-lg:px-3 max-lg:text-base/snug max-sm:px-2">
          {description}
        </p>
        {listItem ? (
          <ul className="list mt-3 list-inside max-md:text-sm *:text-nowrap max-sm:px-3 list-[disclosure-closed] gap-x-6 justify-center flex flex-wrap text-lg font-semibold grid-cols-2 text-left max-lg:text-base/snug">
            {listItem.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
