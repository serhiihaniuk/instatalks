"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const Carousel = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-92%"]);

  return (
    <section ref={targetRef} className="relative mt-20 h-[600vh]">
      <h2 className="block translate-y-16 pr-16 text-center text-3xl font-bold md:text-4xl">
        <span className="bg-gradient-to-r from-gradient-blue to-gradient-teal bg-clip-text px-2 text-center text-transparent ">
          Попередня конференція
        </span>
      </h2>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: TCard }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[80vh] w-[800px] overflow-hidden bg-neutral-200"
    >
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
