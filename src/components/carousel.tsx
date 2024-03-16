"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { cn } from "~/utils";

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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <h2 className="mb-5 text-start text-3xl font-bold md:text-4xl">
        <span
          className={cn(
            "absolute top-0 block h-7 w-7 scale-125 rounded-2xl bg-amber-100 blur-xl",
          )}
        />
        <span
          data-content={"Попередня конференція"}
          className="relative block before:absolute before:inset-y-0 before:left-0 before:z-0 before:block before:w-full before:animate-gradient-background-1 before:bg-gradient-to-r before:from-pink-400 before:to-orange-300 before:bg-clip-text before:px-2 before:text-start before:text-transparent before:content-[attr(data-content)]"
        >
          <span className="animate-gradient-foreground-1 bg-gradient-to-r from-gradient-blue to-gradient-teal bg-clip-text px-2 text-start text-transparent">
            Попередня конференція
          </span>
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
      className="group relative h-[90vh] w-[800px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default Carousel;

const cards = [
  {
    url: "prev/1.jpeg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "prev/2.jpeg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "prev/3.jpeg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "prev/4.jpeg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "prev/5.jpeg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "prev/6.jpeg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "prev/7.jpeg",
    title: "Title 7",
    id: 7,
  },
];

type TCard = (typeof cards)[0];
