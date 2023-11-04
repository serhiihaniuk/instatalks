"use client";

import React, { useState, useEffect } from "react";

// Define a type for the time left object
type TimeLeft = {
  дні?: number;
  години?: number;
  хвилини?: number;
  секунди?: number;
};

// Utility function to determine the correct Ukrainian word based on the number
const getUkrainianWord = (
  number: number,
  words: [string, string, string],
): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return words[
    // @ts-ignore
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ] as unknown as string;
};

const Countdown = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date("2023-11-27") - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        дні: Math.floor(difference / (1000 * 60 * 60 * 24)),
        години: Math.floor((difference / (1000 * 60 * 60)) % 24),
        хвилини: Math.floor((difference / 1000 / 60) % 60),
        секунди: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  // Define the type for the timer components array
  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const value = timeLeft[interval as keyof TimeLeft];
    if (!value) {
      return;
    }

    // Words for each time unit in Ukrainian (singular, few, many)
    // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
    const wordsMap: { [key: string]: [string, string, string] } = {
      дні: ["день", "дні", "днів"],
      години: ["година", "години", "годин"],
      хвилини: ["хвилина", "хвилини", "хвилин"],
      секунди: ["секунда", "секунди", "секунд"],
    };

    timerComponents.push(
      <span key={interval} className="">
        {value} {getUkrainianWord(value, wordsMap[interval]!)}{" "}
      </span>,
    );
  });

  if (!isMounted) {
    return null;
  }

  if (!timerComponents.length) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center px-5 text-center">
      <div className="text-xl font-extrabold text-emerald-900">Залишилось:</div>
      <div className="text-xl">{timerComponents}</div>
    </div>
  );
};

export default Countdown;
