/** @format */

import HeartIcon from "@/shared/icons/heart.svg?react";

type Props = {
  isFavorite: boolean;
};

export default function FavoriteButton({ isFavorite }: Props) {
  return (
    <button
      className="
        absolute top-3 right-3
        p-1 rounded-md
        bg-white shadow-sm
        hover:scale-110 transition
      "
    >
      <HeartIcon
        className={`
          w-5 h-5 transition
          ${isFavorite ? "fill-red-500 text-red-500 scale-110" : "fill-none stroke-gray-400"}
        `}
      />
    </button>
  );
}
