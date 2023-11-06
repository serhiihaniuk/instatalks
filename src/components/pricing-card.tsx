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
  <div
    className="bg-gradient mx-auto flex max-w-lg flex-col rounded-lg border border-emerald-900 bg-no-repeat p-6 text-center text-white shadow"
    style={{
      backgroundSize: "85% 75%",
    }}
  >
    <h3 className="mb-4 text-4xl font-semibold">Обычный Билет</h3>
    <div className="my-8 flex items-baseline justify-center">
      <span className="mr-2 text-5xl font-extrabold">249</span>
      <span className="text-gray-500 dark:text-gray-400">/zł</span>
    </div>
    <ul role="list" className="mb-8 space-y-4 text-left">
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>Вход на конференцию</span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>Кофе-брейк</span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>
          <span className="bg-gradient-to-r from-pink-400 to-violet-300 bg-clip-text text-transparent">
            Подарки{" "}
          </span>
          от спонсоров
        </span>
      </li>
      <li className="flex items-center space-x-3 pl-[33px] text-gray-300 line-through">
        <span>
          <span className="bg-gradient-to-r from-pink-400 to-violet-300 bg-clip-text text-transparent">
            Подарки{" "}
          </span>
          организаторов
        </span>
      </li>
      <li className="flex items-center space-x-3 pl-[33px] text-gray-300 line-through">
        <span>Места в первых рядах</span>
      </li>
      <li className="flex items-center space-x-3 pl-[33px] text-gray-300 line-through">
        <span>Обед со спикерами</span>
      </li>
      <li className="flex items-center space-x-3 pl-[33px] text-gray-300 line-through">
        <span>
          Возможность лично пообщаться с крутыми экспертами в своей нише
        </span>
      </li>
    </ul>
    <a
      href="#"
      className="rounded-lg border border-emerald-900 px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 dark:text-white"
    >
      Забронировать
    </a>
  </div>
);

export const PricingCardVIP = () => (
  <div className="bg-gradient mx-auto flex max-w-lg flex-col rounded-lg border  border-pink-800 bg-cover p-6 text-center text-white shadow">
    <h3 className="mb-4 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-4xl font-semibold text-transparent">
      <span
        data-content={"VIP Билет"}
        className="before:animate-gradient-background-1 relative block before:absolute before:inset-y-0 before:left-0 before:z-0 before:block before:w-full before:bg-gradient-to-r before:from-pink-400 before:to-orange-300 before:bg-clip-text before:px-2 before:text-center before:text-transparent before:content-[attr(data-content)]"
      >
        <span className="animate-gradient-foreground-1 from-gradient-purple to-gradient-red bg-gradient-to-r bg-clip-text px-2 text-start text-transparent">
          VIP Билет
        </span>
      </span>
    </h3>
    <div className="my-8 flex items-baseline justify-center">
      <span className="mr-2 text-5xl font-extrabold">499</span>
      <span className="text-gray-500 dark:text-gray-400">/zł</span>
    </div>
    <ul role="list" className="mb-8 space-y-4 text-left">
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>Вход на конференцию</span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>Кофе-брейк</span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>
          <span className="bg-gradient-to-r from-pink-400 to-violet-300 bg-clip-text text-transparent">
            Подарки{" "}
          </span>
          от спонсоров
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>
          <span className="bg-gradient-to-r from-pink-400 to-violet-300 bg-clip-text text-transparent">
            Подарки{" "}
          </span>
          организаторов
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>Места в первых рядах</span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>Обед со спикерами</span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>
          Возможность лично пообщаться с крутыми экспертами в своей нише
        </span>
      </li>
    </ul>
    <a
      href="#"
      className="rounded-lg border border-pink-800 px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 dark:text-white"
    >
      Забронировать
    </a>
  </div>
);
