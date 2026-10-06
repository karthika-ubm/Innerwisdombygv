"use client";

import { useEffect, useState } from "react";
import { getNextSessionDate } from "@/lib/next-session";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = getNextSessionDate().getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center justify-center bg-space-cadet text-cream rounded-2xl w-[68px] h-[74px] shadow-md"
        >
          <span className="text-2xl font-bold tabular-nums leading-none">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-[10px] text-tan uppercase tracking-wider mt-1.5">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}