"use client";

import React, { useState, useEffect } from "react";

// Define a type for the time left object
type TimeLeft = {
  дні?: number;
  години?: number;
  хвилини?: number;
  секунди?: number;
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

    timerComponents.push(
      <span key={interval}>
        {value} {interval}{" "}
      </span>,
    );
  });

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div>Залишилось:</div>
      <div>
        {timerComponents.length ? timerComponents : <span>Time&aposs up!</span>}
      </div>
    </div>
  );
};

export default Countdown;
