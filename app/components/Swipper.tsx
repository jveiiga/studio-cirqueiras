"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function CardSlider() {
  return (
    <div className="max-w-[1800px] mx-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          680: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
          1280: { slidesPerView: 4},
        }}
      >
        <SwiperSlide className="">
          <div className="relative mx-5 h-[800px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full h-[562px] rounded-2xl overflow-hidden">
            <Image src="/images/design-simples.jpg" alt="Design Simples" fill className="object-cover" />
            <div className="absolute inset-0 flex items-end px-6 py-10 bg-gradient-to-t from-[#4c2a12]/60">
              <p className="text-white text-4xl uppercase tracking-wide">Design Simples</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative mx-5 h-[600px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full h-[562px] rounded-2xl overflow-hidden">
            <Image src="/images/brow-lamination.jpg" alt="Brow Lamination" fill className="object-cover" />
            <div className="absolute inset-0 flex items-end px-6 py-10 bg-gradient-to-t from-[#4c2a12]/60">
              <p className="text-white text-4xl uppercase tracking-wide">Brow Lamination</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative mx-5 h-[600px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full h-[562px] rounded-2xl overflow-hidden">
            <Image src="/images/design-com-henna.jpg" alt="Design com Henna" fill className="object-cover" />
            <div className="absolute inset-0 flex items-end px-6 py-10 bg-gradient-to-t from-[#4c2a12]/60">
              <p className="text-white text-4xl uppercase tracking-wide">Design com Henna</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative mx-5 h-[600px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full h-[562px] rounded-2xl overflow-hidden">
            <Image src="/images/fox-eyes.jpg" alt="Fox Eyes" fill className="object-cover" />
            <div className="absolute inset-0 flex items-end px-6 py-10 bg-gradient-to-t from-[#4c2a12]/60">
              <p className="text-white text-4xl uppercase tracking-wide">Fox Eyes</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative mx-5 h-[600px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full h-[562px] rounded-2xl overflow-hidden">
            <Image src="/images/lash-lifiting.jpg" alt="Lash Lifiting" fill className="object-cover" />
            <div className="absolute inset-0 flex items-end px-6 py-10 bg-gradient-to-t from-[#4c2a12]/60">
              <p className="text-white text-4xl uppercase tracking-wide">Lash Lifiting</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative mx-5 h-[600px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full h-[562px] rounded-2xl overflow-hidden">
            <Image src="/images/mega-fox-1.jpg" alt="Mega Fox" fill className="object-cover" />
            <div className="absolute inset-0 flex items-end px-6 py-10 bg-gradient-to-t from-[#4c2a12]/60">
              <p className="text-white text-4xl uppercase tracking-wide">Mega Fox</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative mx-5 h-[600px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full h-[562px] rounded-2xl overflow-hidden">
            <Image src="/images/nail-art.jpg" alt="Nail Art" fill className="object-cover" />
            <div className="absolute inset-0 flex items-end px-6 py-10 bg-gradient-to-t from-[#4c2a12]/60">
              <p className="text-white text-4xl uppercase tracking-wide">Nail Art</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative mx-5 h-[600px] sm:w-[90%] sm:h-[800px] sm:mx-auto lg:mx-auto lg:max-w-[370px] xl:w-full h-[562px] rounded-2xl overflow-hidden">
            <Image src="/images/banho-de-gel.jpg" alt="Banho de Gel" fill className="object-cover" />
            <div className="absolute inset-0 flex items-end px-6 py-10 bg-gradient-to-t from-[#4c2a12]/60">
              <p className="text-white text-4xl uppercase tracking-wide">Banho de Gel</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
