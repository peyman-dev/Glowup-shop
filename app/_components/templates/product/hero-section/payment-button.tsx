"use client";
import { useModal } from "@/app/_core/hooks/use-modal";
import Link from "next/link";
import React, { useTransition } from "react";
import AlertMessage from "../alert-message";
import { redirect } from "next/navigation";

const PaymentButton = () => {
  const { closeModal, openModal } = useModal();
  const [isPending, startTransition] = useTransition();

  const redirectUser = () => {
    startTransition(async () => {
      return await redirect("https://reymit.ir/Jazabiyatclub");
    });
  };

  return (
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
      className="w-full h-12 border-2 border-red-800 hover:opacity-90   flex items-center justify-center gap-2 rounded-md duration-300 transition-all bg-linear-to-t from-red-600 to-red-500 text-white font-medium focus-within:ring-4 ring-red-500/40 cursor-pointer"
    >
      خرید دوره
    </button>
  );
};

export default PaymentButton;
