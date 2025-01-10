import React from "react";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  MessageIcon,
  PhoneCallIcon,
  TelephoneIcon,
  YoutubeIcon,
} from "@/icons";

export function Footer() {
  return (
    <section className="bg-primary py-6 text-white">
      <div className="flex flex-wrap justify-center max-sm:text-xs gap-x-5 italic max-sm:gap-1 mb-2">
        <a href="mailto:care@vistaar.media" className="flex items-center gap-2 max-sm:gap-1">
          <span className="h-4 w-5 max-sm:h-4 max-sm:w-4">
          <MessageIcon />
          </span>
          <h3 className="max-sm:text-sm">care@vistaar.media</h3>
        </a>
        <a href="mailto:info@chaltifirtidukaan.com" className="flex items-center gap-2 max-sm:gap-1">
          <MessageIcon />
          <h3 className="max-sm:text-sm">info@chaltifirtidukaan.com</h3>
        </a>
      </div>
      <div className="flex justify-center items-center w-full flex-wrap gap-x-3 gap-y-1 max-sm:text-sm mb-2 py-2 max-sm:gap-x-3">
        <div className="flex items-center gap-2 max-sm:gap-1">
          <span className="h-5 w-5 max-sm:h-4 max-sm:w-4">
            <PhoneCallIcon />
          </span>
          <a href="tel:+918076234044">+918076234044</a>
        </div>
        <span className=" max-sm:hidden block">|</span>
        <div className="flex items-center gap-2 max-sm:gap-1">
          <span className="h-5 w-5 max-sm:h-4 max-sm:w-4">
            <TelephoneIcon />
          </span>
          <a href="tel:+911204151246">+91 120 415 1246</a>
        </div>
        <span className=" max-sm:hidden block">|</span>
        <div className="flex items-center gap-2 max-sm:gap-1 ">
          <span className="h-5 w-5 max-sm:h-4 max-sm:w-4">
            <PhoneCallIcon />
          </span>
          <a href="tel:+917303488667">+91 7303488667</a>
        </div>
      </div>
      <address className="mx-auto w-fit text-center px-3 max-sm:text-sm/tight font-light">
        Unit 901, Tower B, ITHUMB TOWER, Block A, Industrial Area Sector 62,
        Noida Uttar Pradesh 201309
      </address>
      <div className="pt-4 flex items-center justify-center gap-3 py-2">
        <Link href="" target="_blank" className="w-8 h-8">
          <YoutubeIcon />
        </Link>
        <Link href="https://www.instagram.com/vistaar_media/?igsh=MWY1aDZzbTY0ZHBucw%3D%3D" target="_blank" className="w-6 h-6">
          <InstagramIcon />
        </Link>
        <Link href="" target="_blank" className="w-5 h-5">
          <FacebookIcon />
        </Link>
      </div>
    </section>
  );
}
