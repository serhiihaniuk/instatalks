import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  image: string;
  instagram?: string;
  ticktok?: string;
  youtube?: string;
};
const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  instagram,
  ticktok,
  youtube,
}) => {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl bg-gradient bg-bottom text-white md:bg-top lg:flex lg:max-w-full">
      <div
        className="relative h-72 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-l lg:rounded-t-none"
        title="Woman holding a mug"
      >
        <Image
          src={image}
          width={300}
          className="absolute inset-0 h-full w-full object-cover"
          height={500}
          quality={80}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div className="mb-8">
          <div className="font-base mb-2 text-lg">{title}</div>
          <p className="text-base font-thin">{description}</p>
        </div>
        <div className="flex items-center gap-3">
          {instagram && (
            <div className="flex items-center justify-center gap-2 text-sm">
              <InstagramIcon />
              <p className="leading-none">{instagram}</p>
            </div>
          )}
          {ticktok && (
            <div className="flex items-center justify-center gap-2 text-sm">
              <TiktokIcon />
              <p className="leading-none">{ticktok}</p>
            </div>
          )}
          {youtube && (
            <div className="flex items-center justify-center gap-2 text-sm">
              <YoutubeIcon />
              <p className="leading-none">{youtube}</p>
            </div>
          )}
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

const TiktokIcon = () => (
  <svg
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
      stroke="#fff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 12C8.34315 12 7 13.3431 7 15C7 16.6569 8.34315 18 10 18C11.6569 18 13 16.6569 13 15V6C13.3333 7 14.6 9 17 9"
      stroke="#fff"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const YoutubeIcon = ({ size = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-youtube"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

export default Card;
