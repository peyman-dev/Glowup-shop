"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import ImagePreview from "@/app/_components/common/image-preview";

const CourseImage = () => {
  const ref = useRef<SwiperRef>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const images = [
    "/assets/server/product.png",
    "/assets/server/cover-text.png",
    "/assets/static/images/رضایت 2.png",
    "/assets/static/images/رضایت3.png",
    "/assets/static/images/رضایت4.png",
    "/assets/static/images/نتایج.png",
  ];

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
          delay: 1700,
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-[628px] md:h-[699px]  rounded-xl overflow-hidden"
              onClick={() => setIsPreviewOpen(true)}
            >
              <Image
                width={1000}
                className="size-full!"
                objectFit="cover"
                height={1000}
                src={src}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <div
            className="h-[628px] md:h-[699px]  rounded-xl overflow-hidden"
            onClick={() => setIsPreviewOpen(true)}
          >
            {" "}
            <Image
              width={1000}
              className="size-full!"
              objectFit="cover"
              height={1000}
              src={"/assets/server/product.png"}
              alt=""
            />
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div
            className="h-[628px] md:h-[699px]  rounded-xl overflow-hidden"
            onClick={() => setIsPreviewOpen(true)}
          >
            <Image
              width={1000}
              className="size-full!"
              objectFit="cover"
              height={1000}
              src={"/assets/server/cover-text.png"}
              alt=""
            />
          </div>
        </SwiperSlide> */}
      </Swiper>
      <button
        className="absolute left-0 size-10 md:size-15 z-20 border border-zinc-800 rounded-full flex items-center justify-center cursor-pointer bg-zinc-950"
        onClick={() => ref.current?.swiper.slideNext()}
      >
        <ChevronLeft className="size-6" />
      </button>
      <ImagePreview
        images={images}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </div>
  );
};

export default CourseImage;
