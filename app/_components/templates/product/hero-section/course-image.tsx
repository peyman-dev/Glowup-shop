"use client";
import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Image } from "antd";

const CourseImage = () => {
  const ref = useRef<SwiperRef>(null);

  return (
    <div className="relative flex items-center justify-center">
      <button
        onClick={() => ref.current?.swiper.slidePrev()}
        className="absolute right-0 size-10 md:size-15 z-20 border border-zinc-800 rounded-full flex items-center justify-center cursor-pointer bg-zinc-950"
      >
        <ChevronRight className="size-6" />
      </button>
      <Swiper
        ref={ref}
        spaceBetween={16}
        loop
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
        }}
      >
        <SwiperSlide>
          <div className="h-[628px] md:h-[684px]  rounded-xl overflow-hidden">
            {" "}
            <Image
            preview={{
              mask: (
                <span className="font-estedad!"> نمایش </span>
              )
            }}
              className="size-full! object-cover!"
              src={"/assets/server/product.png"}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[628px] md:h-[684px]  rounded-xl overflow-hidden">
            <Image
            preview={{
              mask: (
                <span className="font-estedad!"> نمایش </span>
              )
            }}
              className="size-full! min-h-max! object-cover!"
              src={"/assets/server/cover-text.png"}
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <button
        className="absolute left-0 size-10 md:size-15 z-20 border border-zinc-800 rounded-full flex items-center justify-center cursor-pointer bg-zinc-950"
        onClick={() => ref.current?.swiper.slideNext()}
      >
        <ChevronLeft className="size-6" />
      </button>
    </div>
  );
};

export default CourseImage;
