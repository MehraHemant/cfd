import Link from "next/link";

export function ServiceCardButton({ link }) {
  return (
    <button className="primary-btn group mx-auto">
      <Link href={link} className="max-md:text-base max-sm:text-sm">
        know more
      </Link>
      <img src="images/logo/right-arrow.svg" alt="right-arrow" />
    </button>
  );
}