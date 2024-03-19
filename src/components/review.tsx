"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

export const Reviews = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="reviews"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review}>
            <Image src={review} alt="review" width={400} height={700} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const reviews = [
  "/rev1.png",
  "/rev2.png",
  "/rev3.png",
  "/rev4.png",
  "/rev5.png",
  "/rev6.jpg",
  "/rev7.jpg",
  "/rev8.jpg",
];
