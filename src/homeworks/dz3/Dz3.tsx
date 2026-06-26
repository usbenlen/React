/** @format */

import ProductList from "@/homeworks/dz3/components/ProductList";
import productData from "@/lessons/lesson3/models/products"; //Список з усіма продуктами
import CreateProduct from "@/lessons/lesson3/components/CreateProduct";

import { useState } from "react";

export default function Dz3() {
  const [products, setProducts] = useState(productData);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Товари</h1>

      <ProductList products={products} />
      <CreateProduct
        setProduct={(product) => setProducts((prev) => [...prev, product])}
        products={products}
      />
    </div>
  );
}
