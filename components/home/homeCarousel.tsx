"use client";

import { gamesData } from "@/data/gamesData";
import Image from "next/image";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export default function HomeCarousel() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      navigation={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 35,
        stretch: 400,
        depth: 850,
        // modifier: 1,
        slideShadows: false,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className="gameSwiper"
    >
      {gamesData.map((item) => (
        <SwiperSlide>
          <div className="gameSlider flex items-center justify-center">
            <Image
              src={item.img}
              // className="swiper-slide-img h-[300px] object-cover items-center justify-center"
              className="h-[300px] object-cover rounded-2xl"
              alt="img"
              width={500}
              height={500}
            />
            <div className="absolute bottom-10 max-md:items-center md:left-[25%] text-4xl text-white font-bold z-30 p-2 bg-black/70">
              {item.title}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
