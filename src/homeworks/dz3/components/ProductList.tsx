/** @format */

import type { ProductType } from "@/homeworks/dz3/types/ProductType";
import ProductCard from "@/homeworks/dz3/components/ProductCard";

type Props = {
  products: ProductType[];
};

export default function ProductList({ products }: Props) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
