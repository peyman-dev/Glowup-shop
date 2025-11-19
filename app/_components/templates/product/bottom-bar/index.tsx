"use client";
import useIsMobile from "@/app/_core/hooks/use-is-mobile";
import { useModal } from "@/app/_core/hooks/use-modal";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useTransition } from "react";
import AlertMessage from "../alert-message";

const BottomBar = () => {
  const isMobile = useIsMobile();
  const { closeModal, openModal } = useModal();
  const [isPending, startTransition] = useTransition();

  const redirectUser = () => {
    startTransition(async () => {
      return await redirect("https://reymit.ir/Jazabiyatclub");
    });
  };
  if (isMobile) {
    return (
      <div className="fixed bottom-0! mb-0! right-0 w-full h-22 border-t border-zinc-300/20 flex items-center px-4 justify-between bg-black/50 backdrop-blur-sm z-50">
        <div className="font-bold">
          <div>
            <span className="text-lg">
              {Number(990_000).toLocaleString("fa-IR")}
            </span>
            <span className="px-1">تومان</span>
          </div>
          <div className="mt-1 text-sm text-zinc-400">
            <span>{Number(5_600_000).toLocaleString("fa-IR")}</span>
            <span>تومان</span>
            <span className="px-1">
              {`(${Number(80).toLocaleString("fa-IR")}% تخفیف)`}
            </span>
          </div>
        </div>
        <button
          onClick={() => {
            openModal(
              <>
                <AlertMessage />
                <button
                  onClick={redirectUser}
                  id="payment-link"
                  tabIndex={1}
                  className="w-full h-12 border-2 border-red-800 hover:opacity-90   flex  cursor-pointer items-center justify-center gap-2 rounded-md duration-300 transition-all bg-linear-to-t from-red-600 to-red-500 font-medium focus-within:ring-4 ring-red-500/40 **:text-white!"
                >
                  {isPending ? (
                    <span>درحال هدایت ...</span>
                  ) : (
                    <span className="text-white!">تائید و خرید دوره</span>
                  )}
                </button>
              </>
            );
          }}
          className="max-w-max px-4 text-sm! h-12 border-2 border-red-800 hover:opacity-90   flex items-center justify-center gap-2 rounded-md duration-300 transition-all bg-linear-to-t from-red-600 to-red-500 text-white font-medium focus-within:ring-4 ring-red-500/40 cursor-pointer"
        >
          خرید دوره
        </button>
      </div>
    );
  }
};

export default BottomBar;
