/** @format */

import ProductList from "@/homeworks/dz3/components/ProductList";
import type { ProductType } from "@/homeworks/dz3/types/ProductType";

import img1 from "@/shared/images/dz3/cnd-gtws2b__1.webp";
import img2 from "@/shared/images/dz3/eh187k_black.webp";

export default function Dz3() {
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
    },
    {
      id: 2,
      title: "Навушники Esperanza EH187K",
      image: img2,
      price: 549,
      oldPrice: 899,
      discountPercent: 39,
      rating: 4,
      reviewsCount: 24,
      isFavorite: false,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Товари</h1>

      <ProductList products={products} />
    </div>
  );
}
