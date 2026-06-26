/** @format */

import type { ProductType } from "@/homeworks/dz3/types/ProductType";

import img1 from "@/shared/images/dz3/cnd-gtws2b__1.webp";
import img2 from "@/shared/images/dz3/eh187k_black.webp";
import img3 from "@/shared/images/lesson3/Logitech_M185.webp";

const products: ProductType[] = [
  {
    id: 1,
    title: "Бездротові навушники Canyon GTWS2 TWS Bluetooth Black",
    image: img1,
    price: 229,
    oldPrice: 299,
    discountPercent: 23,
    rating: 3.4,
    reviewsCount: 1,
    isFavorite: true,
    available: true,
  },
  {
    id: 2,
    title: "Навушники Esperanza EH187K",
    image: img2,
    price: 549,
    oldPrice: 899,
    discountPercent: 39,
    rating: 4.3,
    reviewsCount: 24,
    isFavorite: false,
    available: true,
  },
  {
    id: 3,
    title: "Бездротова миша Logitech M185",
    image: img3,
    price: 429,
    oldPrice: 699,
    discountPercent: 39,
    rating: 4.7,
    reviewsCount: 87,
    isFavorite: false,
    available: true,
  },
];

export default products;
