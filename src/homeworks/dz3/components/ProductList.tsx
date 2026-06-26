/** @format */

import type { ProductType } from "@/homeworks/dz3/types/ProductType";
import ProductCard from "@/homeworks/dz3/components/ProductCard";
import { useState } from "react";

type Props = {
  products: ProductType[];
};

export default function ProductList({ products }: Props) {
  const [listOfProducts, setProducts] = useState<ProductType[]>([...products]); // це доробити (буде на парі)
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {listOfProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
