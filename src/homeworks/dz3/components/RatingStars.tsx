/** @format */

import StarIcon from "@/shared/icons/star.svg?react";

type Props = {
  rating: number;
};

export default function RatingStars({ rating }: Props) {
  return (
    <div className="flex gap-px">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i));

        return (
          <div key={i} className="relative w-3.5 h-3.5">
            <StarIcon className="absolute inset-0 w-full h-full text-gray-200" />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <StarIcon className="w-3.5 h-3.5 text-yellow-400" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
