/** @format */

import CartIcon from "@/shared/icons/cart.svg?react";

export default function CartButton() {
  return (
    <button
      className="
        group flex items-center
        bg-red-500 text-white
        rounded-md overflow-hidden

        h-10 w-10 group-hover:w-32

        justify-center
        gap-0 group-hover:gap-4

        transition-[width,background-color] duration-250 ease-in-out
        hover:bg-red-600"
    >
      <CartIcon className="w-6 h-6" />

      <span
        className="
          whitespace-nowrap
          font-medium

          max-w-0
          opacity-0

          group-hover:max-w-25
          group-hover:opacity-100

          transition-all duration-450
        "
      >
        Купити
      </span>
    </button>
  );
}
