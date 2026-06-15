/** @format */

import type { ProductType } from "@/homeworks/dz3/types/ProductType";

import FavoriteButton from "@/homeworks/dz3/components/FavoriteButton";
import CartButton from "@/homeworks/dz3/components/CartButton";
import RatingStars from "@/homeworks/dz3/components/RatingStars";
import Reviews from "@/homeworks/dz3/components/Reviews";

type Props = {
  product: ProductType;
};

export default function ProductCard({ product }: Props) {
  return (
    <div
      className="
        group relative w-72 bg-white
        rounded-2xl border border-gray-100
        p-4
        shadow-sm
        transition-all duration-300 ease-out

        hover:-translate-y-1
        hover:shadow-2xl
        hover:border-gray-200
        hover:z-20
      "
    >
      <FavoriteButton isFavorite={product.isFavorite} />

      <div className="flex justify-center">
        <img
          src={product.image}
          className="
            h-40 object-contain
            transition-transform duration-300
            group-hover:scale-105
          "
        />
      </div>

      <h3 className="mt-3 font-semibold text-gray-800 line-clamp-2 h-12">
        {product.title}
      </h3>

      <div className="flex items-center gap-1.5 text-sm text-gray-500">
        <RatingStars rating={product.rating} />

        <div className="flex items-center gap-4 text-gray-500 font-medium">
          <span className="text-[13px]">{product.rating}</span>
          <Reviews count={product.reviewsCount} />
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div className="flex flex-col leading-tight">
          <span className="text-xs text-gray-400 line-through">
            {product.oldPrice} ₴
          </span>

          <span className="text-xl font-bold text-red-500">
            {product.price} ₴
          </span>
        </div>

        <div className="flex items-end">
          <CartButton />
        </div>
      </div>
    </div>
  );
}
