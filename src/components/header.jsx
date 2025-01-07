"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function Header() {
  const [isHidden, setIsHidden] = useState(true);
  const [hash, setHash] = useState("");
  const handleNavItemClick = () => {
    setIsHidden((prev) => !prev);
  };
  const path = usePathname();
  useEffect(() => {
    const newHash = window.location.hash;
    setHash(newHash);
  });

  const ref = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        !isHidden && setIsHidden(true);
      }
    };
    window.addEventListener("mousedown", handleOutSideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [isHidden]);
  return (
    <header className="sticky top-0 z-50 bg-white/80 drop-shadow-xl backdrop-blur-3xl">
      <div className="relative flex h-20 min-h-16 w-full justify-center bg-white">
        <div className="bg-primary h-12 w-full"></div>
        <img
          src="/images/CFD-Logo.png"
          className="absolute top-1.5 h-16"
          alt="logo"
        />
      </div>
      <div
        id="header"
        className="pt- mx-auto flex max-w-3xl justify-between px-2 py-2 text-sm font-semibold tracking-tight *:px-2 max-sm:text-xs"
      >
        <Link href="/" className={twMerge("", path === "/" ? "selected" : "")}>
          Home
        </Link>
        <Link
          href="/#humari-pehchan"
          className={twMerge(
            "max-lg:hidden",
            hash === "#humari-pehchan" ? "selected" : ""
          )}
        >
          Humari Pehchan
        </Link>
        <div className="group relative h-full">
          <span
            className={twMerge(
              "cursor-pointer pt-0",
              path == "/btlServices" ||
                path == "/atlServices" ||
                path == "/dmServices" ||
                path == "/about"
                ? "selected"
                : ""
            )}
            onClick={handleNavItemClick}
            id="services"
          >
            Services
          </span>
          <div
            id="dropdown"
            className={twMerge(
              "absolute top-7 z-10 flex-col bg-white/90 text-black shadow-lg *:border-b max-sm:top-6",
              isHidden ? "hidden" : "flex"
            )}
            ref={ref}
          >
            <Link
              onClick={() => setIsHidden((prev) => !prev)}
              href="/about"
              className={twMerge(
                "hover:bg-secondary text-nowrap px-4 py-3",
                path == "/about" ? "bg-gray-200" : ""
              )}
            >
              CFD
            </Link>
            <Link
              onClick={() => setIsHidden((prev) => !prev)}
              href="/btlServices"
              className={twMerge(
                "hover:bg-secondary text-nowrap px-4 py-3",
                path == "/btlServies" ? "bg-gray-200" : ""
              )}
            >
              BTL Services
            </Link>
            <Link
              onClick={() => setIsHidden((prev) => !prev)}
              href="/dmServices"
              className={twMerge(
                "hover:bg-secondary text-nowrap px-4 py-3",
                path == "/dmServices" ? "bg-gray-200" : ""
              )}
            >
              Digital Marketing Services
            </Link>
            <Link
              onClick={() => setIsHidden((prev) => !prev)}
              href="/atlServices"
              className={twMerge(
                "hover:bg-secondary text-nowrap px-4 py-3",
                path == "/atlServices" ? "bg-gray-200" : ""
              )}
            >
              ATL Services
            </Link>
          </div>
        </div>
        <Link
          href="/about#case-study"
          className={twMerge("", hash === "#case-study" ? "selected" : "")}
        >
          Case Study
        </Link>
        <a href="#" className="hidden">
          Blog
        </a>
        <Link
          href="/#contact-us"
          className={twMerge("", hash === "#contact-us" ? "selected" : "")}
        >
          Let&apos;s Connect
        </Link>
      </div>
    </header>
  );
}
