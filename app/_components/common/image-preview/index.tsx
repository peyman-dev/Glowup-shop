"use client";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import React, { useRef, useEffect, useState } from "react"; // useState رو اضافه کن
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/swiper.css";

interface ImagePreviewProps {
  images: string[];
  isOpen?: boolean;
  onClose?: () => void;
  initialIndex?: number;
}

const ImagePreview = ({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}: ImagePreviewProps) => {
  const ref = useRef<SwiperRef>(null);
  const [currentIndex, setCurrentIndex] = useState(initialIndex); // state جدید برای currentIndex

  console.log(currentIndex);

  useEffect(() => {
    if (ref.current?.swiper && initialIndex > 0) {
      ref.current.swiper.slideTo(initialIndex, 0);
    }
  }, [initialIndex]);


  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-509! flex items-center justify-center bg-black/95 backdrop-blur-sm">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110 active:scale-95 md:top-6 md:right-6"
        aria-label="Close preview"
      >
        <XIcon className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={() => {
          ref.current?.swiper?.slideNext();
        }}
        className="absolute left-2 md:left-6 z-10 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous image"
      >
        <ChevronLeftIcon className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={() => ref.current?.swiper?.slidePrev()}
        className="absolute right-2 md:right-6 z-10 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next image"
      >
        <ChevronRightIcon className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <Swiper
        ref={ref}
        modules={[Navigation, Keyboard]}
        centeredSlides
        slidesPerView={1}
        onSlideChange={(s) => {
          console.log(s)
          setCurrentIndex(s.activeIndex );
        }}
        spaceBetween={24}
        keyboard={{ enabled: true }}
        className="w-full h-full"
      >
        {images.map((slide, index) => (
          <SwiperSlide
            key={`${slide}-${index}`}
            className="flex items-center justify-center p-4 md:p-8"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={slide || "/placeholder.svg"}
                alt={`Preview ${index + 1}`}
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm md:text-base font-medium">
        {currentIndex + 1} / {images.length}{" "}
        {/* حالا از state استفاده می‌کنه */}
      </div>
    </div>
  );
};

export default ImagePreview;
