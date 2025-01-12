import Image from "next/image";
import Link from "next/link";

export function ServiceCardButton({ link }) {
  return (
    <button className="primary-btn group mx-auto">
      <Link href={link} className="max-md:text-base max-sm:text-sm">
        know more
      </Link>
      <Image width={20} height={20} className="w-6 object-fit max-md:w-4" src="images/logo/right-arrow.svg" alt="right-arrow" />
    </button>
  );
}
