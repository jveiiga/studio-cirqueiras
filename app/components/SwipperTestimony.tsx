"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function CardSlider3() {
  return (
    <div className="max-w-[1800px] mx-auto mx-auto px-4 sm:px-6 lg:px-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        loop
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          375: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
          1536: { slidesPerView: 4 },
        }}
      >
        <SwiperSlide className="flex justify-center overflow-hidden">
          <div className="relative h-[500px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] rounded-2xl overflow-hidden">
            <Image
              src="/images/depoimento-1.png"
              alt="Mega Fox"
              fill
              className="object-cover"
            />

            {/* <div className="absolute inset-0 bg-gradient-to-b from-[#45B1C1]/30 to-transparent" /> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative h-[500px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/depoimento-2.png"
              alt="Brow Lamination"
              fill
              className="object-cover"
            />
            {/* <div className="absolute inset-0 flex items-end pl-2 py-10 bg-gradient-to-b from-[#54c18c]/30"></div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative h-[500px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/depoimento-3.png"
              alt="Design com Henna"
              fill
              className="object-cover"
            />
            {/* <div className="absolute inset-0 flex items-end pl-2 py-10 bg-gradient-to-b from-[#f2b076]/30"></div> */}
          </div>
        </SwiperSlide>

        {/* <SwiperSlide className="flex justify-center">
          <div className="relative h-[500px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/depoimento-4.png"
              alt="Fox Eyes"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end pl-2 py-10 bg-gradient-to-b from-[#d58ed7]/30">
              <p className="text-white text-2xl uppercase tracking-wide flex flex-col leading-tight">
                <span className="font-poppins bg-black rounded-sm p-1">Depoimentos</span>
             
              </p>
            </div>
          </div>
        </SwiperSlide> */}

        <SwiperSlide className="flex justify-center">
          <div className="relative h-[500px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/depoimento-5.png"
              alt="Lash Lifiting"
              fill
              className="object-cover"
            />
            {/* <div className="absolute inset-0 flex items-end pl-2 py-10 bg-gradient-to-b from-[#d58ed7]/30 to-transparent"></div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative h-[500px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/depoimento-6.png"
              alt="Mega Fox"
              fill
              className="object-cover"
            />
            {/* <div className="absolute inset-0 flex items-end pl-2 py-10 bg-gradient-to-b from-[#e08591]/30"></div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative h-[500px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/depoimento-7.png"
              alt="Nail Art"
              fill
              className="object-cover"
            />
            {/* <div className="absolute inset-0 flex items-end pl-2 py-10 bg-gradient-to-b from-[#4c2a12]/30"></div> */}
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="flex justify-center">
          <div className="relative h-[500px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/depoimento-8.png"
              alt="Banho de Gel"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end pl-2 py-10 bg-gradient-to-b from-[#45B1C1]/30">
              <p className="text-white text-2xl uppercase tracking-wide flex flex-col leading-tight">
                <span className="font bg-black rounded-sm p-1-poppins">Gel</span>
                <span className="font-playfair font-bold">Natural</span>
              </p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
