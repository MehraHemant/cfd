import { twMerge } from "tailwind-merge"

export function TeamCard({
  title,
  active,
  description,
  image,
  alt,
  subtitle,
}) {
  return (
    <div className={twMerge("team-member-card h-[520px] text-white", active ? 'scale-105' : 'scale-95')}>
      <img src={image} className="avatar" alt={alt} />
      <div className="py-3 text-center">
        <h3 className="text-xl max-md:text-lg font-bold uppercase">{title}</h3>
        <h4 className="text-base max-md:text-sm font-semibold">{subtitle}</h4>
        <div className="mx-auto my-2 h-0.5 w-36 bg-white"></div>
        <p className="text-thin max-md:text-xs mt-4 text-base max-sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
