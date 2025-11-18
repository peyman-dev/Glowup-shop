"use client";
import useIsMobile from "@/app/_core/hooks/use-is-mobile";
import Link from "next/link";
import React from "react";

const BottomBar = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="fixed bottom-0! mb-0! right-0 w-full h-22 border-t border-zinc-300/20 flex items-center px-4 justify-between bg-black/50 backdrop-blur-sm z-50">
        <div className="font-bold">
          <div>
            <span className="text-lg">
              {Number(599_000).toLocaleString("fa-IR")}
            </span>
            <span className="px-1">تومان</span>
          </div>
          <div className="mt-1 text-sm text-zinc-400">
            <span>{Number(1_999_999).toLocaleString('fa-IR')}</span>
            <span>تومان</span>
            <span className="px-1">
                {`(${Number(20).toLocaleString('fa-IR')}% تخفیف)`}
            </span>
          </div>
        </div>
        <Link
          tabIndex={1}
          href={"PAYMENT_URL"}
          className="max-w-max px-5 text-sm h-12 border-2 border-red-800 hover:opacity-90 flex items-center justify-center gap-2 rounded-md duration-300 transition-all bg-linear-to-t from-red-600 to-red-500 text-white font-medium focus-within:ring-4 ring-red-500/40"
        >
          خرید دوره
        </Link>
      </div>
    );
  }
};

export default BottomBar;
