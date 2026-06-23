"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";


export default function StudioCarousel() {
  return (
    <div className="mt-10">
      <Swiper
        modules={[FreeMode, Autoplay]}
        freeMode
        loop
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        <SwiperSlide className="flex justify-center">
          <div className="relative h-[200px] w-[90%] sm:w-[90%] sm:h-[250px] sm:mx-auto lg:mx-auto lg:max-w-[450px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src=""
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <div className="relative h-[200px] w-[90%] sm:w-[90%] sm:h-[250px] sm:mx-auto lg:mx-auto lg:max-w-[450px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src=""
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <div className="relative h-[200px] w-[90%] sm:w-[90%] sm:h-[250px] sm:mx-auto lg:mx-auto lg:max-w-[450px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src=""
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <div className="relative h-[200px] w-[90%] sm:w-[90%] sm:h-[250px] sm:mx-auto lg:mx-auto lg:max-w-[450px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src=""
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <div className="relative h-[200px] w-[90%] sm:w-[90%] sm:h-[250px] sm:mx-auto lg:mx-auto lg:max-w-[450px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src=""
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <div className="relative h-[200px] w-[90%] sm:w-[90%] sm:h-[250px] sm:mx-auto lg:mx-auto lg:max-w-[450px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src=""
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
