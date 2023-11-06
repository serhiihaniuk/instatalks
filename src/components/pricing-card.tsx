import React from "react";

// You might want to move this SVG to a separate file for cleaner code
const CheckIcon = () => (
  <svg
    className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const PricingCardRegular = () => (
  <div className="bg-gradient mx-auto flex max-w-lg flex-col rounded-lg  border border-emerald-900 p-6 text-center text-white shadow">
    <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
    <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
      Best option for personal use & for your next project.
    </p>
    <div className="my-8 flex items-baseline justify-center">
      <span className="mr-2 text-5xl font-extrabold">$29</span>
      <span className="text-gray-500 dark:text-gray-400">/month</span>
    </div>
    <ul role="list" className="mb-8 space-y-4 text-left">
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>Individual configuration</span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>No setup, or hidden fees</span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>
          Team size: <span className="font-semibold">1 developer</span>
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>
          Premium support: <span className="font-semibold">6 months</span>
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>
          Free updates: <span className="font-semibold">6 months</span>
        </span>
      </li>
    </ul>
    <a
      href="#"
      className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 dark:text-white"
    >
      Get started
    </a>
  </div>
);

export const PricingCardVIP = () => (
  <div className="bg-gradient mx-auto flex max-w-lg flex-col rounded-lg  border border-emerald-900 p-6 text-center text-white shadow">
    <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
    <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
      Best option for personal use & for your next project.
    </p>
    <div className="my-8 flex items-baseline justify-center">
      <span className="mr-2 text-5xl font-extrabold">$29</span>
      <span className="text-gray-500 dark:text-gray-400">/month</span>
    </div>
    <ul role="list" className="mb-8 space-y-4 text-left">
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>Individual configuration</span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>No setup, or hidden fees</span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>
          Team size: <span className="font-semibold">1 developer</span>
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>
          Premium support: <span className="font-semibold">6 months</span>
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>
          Free updates: <span className="font-semibold">6 months</span>
        </span>
      </li>
    </ul>
    <a
      href="#"
      className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 dark:text-white"
    >
      Get started
    </a>
  </div>
);
