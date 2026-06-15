/** @format */

import StarIcon from "@/shared/icons/star.svg?react";

type Props = {
  rating: number;
};

export default function RatingStars({ rating }: Props) {
  return (
    <div className="flex gap-px">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          className={`w-3.5 h-3.5
            ${i < rating ? "text-yellow-400" : "text-gray-200"}
          `}
        />
      ))}
    </div>
  );
}
