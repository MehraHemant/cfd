export function BenefitCard({ title, description, image, background }) {
  return (
    <div style={{background: background}} className="flex flex-col items-center justify-between gap-4 pt-4">
      <h2 className="max-w-60 text-center text-xl/5 font-semibold uppercase text-slate-700 max-sm:text-base/4">
        {title}
      </h2>
      <img src={image} className="object-fit w-20" alt="brand" />
      <p className="w-full bg-white p-3 px-4 py-3 text-center text-slate-600 max-md:text-base/5 max-sm:px-1 max-sm:text-sm/5">
        {description}
      </p>
    </div>
  );
}
