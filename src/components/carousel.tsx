"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export const Carousel = () => {
  return (
    <div className="my-20">
      <h2 className="mb-8 text-center text-4xl font-bold">
        <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
          Попередня конференція
        </span>
      </h2>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      spaceBetween={30}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      modules={[Pagination]}
      className="prev"
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <Card card={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Card = ({ card }: { card: TCard }) => {
  return (
    <div key={card.id} className="group relative h-full w-full overflow-hidden">
      <Image
        src={card.url}
        width={600}
        className="absolute inset-0 h-full w-full object-cover"
        height={800}
        quality={80}
        alt=""
      />
    </div>
  );
};

export default Carousel;

const cards = [
  {
    url: "/prev_conf/1.jpeg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/prev_conf/2.jpeg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/prev_conf/3.jpeg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/prev_conf/4.jpeg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/prev_conf/5.jpeg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/prev_conf/6.jpeg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/prev_conf/7.jpeg",
    title: "Title 7",
    id: 7,
  },
];

type TCard = (typeof cards)[0];
