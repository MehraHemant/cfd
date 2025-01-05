"use client";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function Heading({ primary, title }) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
      setWidth(`${ref.current?.offsetWidth - 50}px`); 
  }, [ref])

  return (
    <div className="flex flex-col text-center items-center gap-2 pb-6 max-md:gap-1">
      <h2
        ref={ref}
        className={twMerge(
          "heading ",
          primary ? "text-primary" : "text-secondary"
        )}
      >
        {title}
      </h2>
      <div
      style={{width}}
        className={twMerge(
          "h-1 max-lg:h-0.5",
          primary ? "bg-primary" : "bg-secondary",
        )}
      />
    </div>
  );
}
