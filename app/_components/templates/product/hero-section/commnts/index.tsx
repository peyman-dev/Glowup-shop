"use client";
import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import { Autoplay } from "swiper/modules";
import Comment from "./comment";
import Link from "next/link";

const Comments = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className="border-t  border-zinc-700">
      <div className="my-3">
        <p className="mb-2 font-bold text-lg text-zinc-300">تماس با پشتیبانی</p>
        <Link
          href={"https://t.me/jazabiyatclub_Sup"}
          className="flex text-blue-500 font-medium items-center gap-2"
          type="_blank"
        >
          <img
            src="/assets/static/images/support.jpg"
            alt="پروفایل پشتیبانی"
            className="size-10 rounded-full"
          />
          @jazabiyatclub_Sup
        </Link>
      </div>
      <p className="mb-6 font-bold text-lg text-zinc-300 border-t  border-zinc-700 pt-5">
        برخی از نظرات دانشجویان:
      </p>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1.5}
        centeredSlides={false}
        initialSlide={0}
        watchSlidesProgress={true}
      >
        <SwiperSlide>
          <Comment />
        </SwiperSlide>
        <SwiperSlide>
          <Comment />
        </SwiperSlide>
        <SwiperSlide>
          <Comment />
        </SwiperSlide>
        <SwiperSlide>
          <Comment />
        </SwiperSlide>
        <SwiperSlide>
          <Comment />
        </SwiperSlide>
        <SwiperSlide>
          <Comment />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Comments;
