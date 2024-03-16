import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSubscribers(subscribers?: number): string | undefined {
  if (!subscribers) return;
  const scale =
    subscribers > 1_000_000
      ? { divisor: 1_000_000, suffix: "m" }
      : subscribers > 1_000
      ? { divisor: 1_000, suffix: "k" }
      : null;

  if (scale) {
    const formattedNumber = (subscribers / scale.divisor).toFixed(1);
    return formattedNumber.endsWith(".0")
      ? `${formattedNumber.slice(0, -2)}${scale.suffix}`
      : `${formattedNumber}${scale.suffix}`;
  }

  return subscribers.toString();
}
