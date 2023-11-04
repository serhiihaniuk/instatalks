import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  image: string;
  instagram: string;
};
const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  instagram,
}) => {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl border border-gray-200 bg-white lg:flex lg:max-w-full">
      <div
        className="h-72 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-l lg:rounded-t-none"
        title="Woman holding a mug"
      >
        <Image src={image} width={300} height={500} quality={80} alt="" />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div className="mb-8">
          <div className="mb-2 text-xl font-bold text-gray-900">{title}</div>
          <p className="text-base text-gray-700">{description}</p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center gap-2 text-sm">
            <InstagramIcon />
            <p className="leading-none underline">{instagram}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-instagram"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default Card;
