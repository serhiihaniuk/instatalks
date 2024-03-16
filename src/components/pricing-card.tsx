import React from "react";

// You might want to move this SVG to a separate file for cleaner code
export const CheckIcon = () => (
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
    className="mx-auto flex max-w-lg flex-col rounded-lg border border-emerald-900 bg-gradient bg-no-repeat p-6 text-center text-white shadow"
    style={{
      backgroundSize: "85% 75%",
    }}
  >
    <h3 className="mb-4 text-4xl font-semibold">Обычный Билет</h3>
    <div className="my-8 flex items-baseline justify-center">
      <span className="mr-2 text-5xl font-extrabold">299</span>
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
          от организаторов
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
    <div className="w-30 flex h-10 items-center justify-center rounded-md bg-red-500">
      SOLD OUT
    </div>
  </div>
);

export const PricingCardVIP = () => (
  <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-pink-800  bg-gradient bg-cover p-6 text-center text-white shadow">
    <h3 className="mb-4 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-4xl font-semibold text-transparent">
      <span
        data-content={"Квиток"}
        className="relative block before:absolute before:inset-y-0 before:left-0 before:z-0 before:block before:w-full before:animate-gradient-background-1 before:bg-gradient-to-r before:from-pink-400 before:to-orange-300 before:bg-clip-text before:px-2 before:text-center before:text-transparent before:content-[attr(data-content)]"
      >
        <span className="animate-gradient-foreground-1 bg-gradient-to-r from-gradient-purple to-gradient-red bg-clip-text px-2 text-start text-transparent">
          Квиток
        </span>
      </span>
    </h3>
    <div className="my-8 flex items-baseline justify-center">
      <span className="mr-2 text-5xl font-extrabold">200</span>
      <span className="text-gray-500 dark:text-gray-400">/zł</span>
    </div>
    <ul
      role="list"
      className="mb-8 block space-y-4 bg-stars bg-no-repeat text-left"
    >
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>Прохід на конференцію</span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>Крутий нетворкінг зі спікерами та учасниками конференції</span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>
          <span className="bg-gradient-to-r from-pink-400 to-violet-300 bg-clip-text text-transparent">
            Подарунки
          </span>
          від наших спонсорів на суму понад 200zł
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>Крутий нетворкінг зі спікерами та учасниками конференції</span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>Кава-брейк і нереальна фото зона для твого контенту</span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>
          Професійний фотограф і доступ до фотографій після конференції
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <CheckIcon />
        <span>Живий Nail-маркет від топових брендів</span>
      </li>
    </ul>
    <div className="w-30 flex h-10 items-center justify-center rounded-md bg-red-500">
      Купити
    </div>
  </div>
);
