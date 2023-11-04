/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "~/hooks/useIntersectionObserver";
import { cn } from "~/utils";

const colors = {
  a: "from-sky-500 to-emerald-500",
  b: "from-emerald-500 to-sky-500",
  c: "from-amber-400 to-rose-500",
  d: "from-rose-500 to-amber-400",
  icon1: "bg-emerald-400",
  icon2: "bg-amber-500",
};

const Line = ({
  f,
  s,
  i,
}: {
  f: keyof typeof colors;
  s: keyof typeof colors;
  i: keyof typeof colors;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const element = useIntersectionObserver(ref, {
    threshold: 0.2,
  });
  const isIntersecting = element?.isIntersecting;
  return (
    <div ref={ref} className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "h-[50%] w-[5px] rounded-2xl bg-gradient-to-b duration-500 ease-in",
          colors[f],
          colors[s],
        )}
        style={{
          transform: isIntersecting ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "0 0",
          transitionDelay: isIntersecting ? "0ms" : "999ms",
        }}
      />
      <div
        className="relative flex h-8 w-8 items-center justify-center"
        style={{
          opacity: isIntersecting ? 1 : 0,
          transitionDelay: isIntersecting ? "600ms" : "800ms",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <span
          className={cn(
            "absolute top-0 block h-full w-full scale-125 rounded-2xl blur-xl",
            colors[i],
          )}
        />
        <svg
          className="relative z-40 fill-white stroke-violet-800"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0112 5z" />
          <path d="M8 14v.5" />
          <path d="M16 14v.5" />
          <path d="M11.25 16.25h1.5L12 17l-.75-.75z" />
        </svg>
      </div>
      <div
        className={cn(
          "h-[50%] w-[5px] rounded-2xl bg-gradient-to-b duration-500 ease-in",
          colors[s],
          colors[f],
        )}
        style={{
          transform: isIntersecting ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "0 0",
          transitionDelay: isIntersecting ? "900ms" : "800ms",
          transitionDuration: isIntersecting ? "500ms" : "600ms",
        }}
      />
    </div>
  );
};

export default Line;
