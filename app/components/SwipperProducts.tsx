"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function CardSlider2() {
  return (
    <div className="max-w-[1800px] mx-auto mx-auto px-4 sm:px-6 lg:px-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          375: { slidesPerView: 2 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 4 },
        }}
      >
        <SwiperSlide className="flex justify-center">
          <div className="relative h-[500px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/quel-5.jpeg"
              alt="Design Simples"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end pl-2 py-10 bg-gradient-to-t from-[#e08591]/60">
              <p className="text-white text-2xl uppercase tracking-wide flex flex-col leading-tight">
                <span className="font-poppins">Design</span>{" "}
                <span className="font-playfair font-bold">Clean</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative h-[500px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/quel-3.jpg"
              alt="Brow Lamination"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end pl-2 py-10 bg-gradient-to-t from-[#d58ed7]/60">
              <p className="text-white text-2xl uppercase tracking-wide flex flex-col leading-tight">
                <span className="font-poppins">Brow</span>
                <span className="font-playfair font-bold">Lamination Pro</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="flex justify-center">
          <div className="relative h-[500px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full rounded-2xl overflow-hidden">
            <Image src="/images/design-com-henna.jpg" alt="Design com Henna" fill className="object-cover" />
            <div className="absolute inset-0 flex items-end px-6 py-10 bg-gradient-to-t from-[#4c2a12]/60">
              <p className="text-white text-4xl uppercase tracking-wide">Design com Henna</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative h-[500px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full rounded-2xl overflow-hidden">
            <Image src="/images/fox-eyes.jpg" alt="Fox Eyes" fill className="object-cover" />
            <div className="absolute inset-0 flex items-end px-6 py-10 bg-gradient-to-t from-[#4c2a12]/60">
              <p className="text-white text-4xl uppercase tracking-wide">Fox Eyes</p>
            </div>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide className="flex justify-center">
          <div className="relative h-[500px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full rounded-2xl overflow-hidden">
            <Image src="/images/lash-lifiting.jpg" alt="Lash Lifiting" fill className="object-cover" />
            <div className="absolute inset-0 flex items-end px-6 py-10 bg-gradient-to-t from-[#4c2a12]/60">
              <p className="text-white text-4xl uppercase tracking-wide">Lash Lifiting</p>
            </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide className="flex justify-center">
          <div className="relative h-[500px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/maria-6.jpeg"
              alt="Mega Fox"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end pl-2 py-10 bg-gradient-to-t from-[#f2b076]/60">
              <p className="text-white text-2xl uppercase tracking-wide flex flex-col leading-tight">
                <span className="font-poppins">Fibra Perfeita</span>
                <span className="font-playfair font-bold">Técnica F1</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative h-[500px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/mariana-1.jpeg"
              alt="Nail Art"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end pl-2 py-10 bg-gradient-to-t from-[#54c18c]/60">
              <p className="text-white text-2xl uppercase tracking-wide flex flex-col leading-tight">
                <span className="font-poppins">Nail</span>
                <span className="font-playfair font-bold">Art Criativa</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative h-[500px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/maria-5.jpeg"
              alt="Banho de Gel"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end pl-2 py-10 bg-gradient-to-t from-[#45B1C1]/60">
              <p className="text-white text-2xl uppercase tracking-wide flex flex-col leading-tight">
                <span className="font-poppins">Gel</span>
                <span className="font-playfair font-bold">Natural</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
