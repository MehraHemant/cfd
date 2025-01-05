import React from "react";
import { twMerge } from "tailwind-merge";

export function Polygon({ reverse, className }) {
  return (
    <div className={twMerge("bg-secondary h-28 max-lg:h-10", className)}>
      <div
        className={twMerge(
          `bg-primary h-full`,
          reverse ? "rev-across" : "across"
        )}
      />
    </div>
  );
}
