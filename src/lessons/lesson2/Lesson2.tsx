/** @format */

import { useState, type ChangeEvent } from "react";
import type { ProductType } from "@/lessons/lesson2/types/ProductType";
// import type { CardType } from "@/lessons/lesson2/types/CardType";
import Counter from "@/lessons/lesson2/components/Counter/Counter";

export default function Lesson2() {
  //1

  // function handlerClick(): void {
  //   console.log("clicked");
  // } // буде працювати з | let value = 100 | але це не правильно

  // let value = 100 // так інтерфейс не оновиться в react
  // const [value, setValue] = useState<number>(50); // Оновиться інтерфейс [назва, назва функції(для присвоєня чисел)]

  // const handleIncrease = () => {
  //   if (value < 100) setValue(value + 10);
  // };

  // const handleDecrease = () => {
  //   if (value > 0) setValue(value - 10);
  // };

  // 2
  const [product, setProduct] = useState<ProductType>({
    id: 1,
    title: "Bread",
    count: 1,
    price: 35,
    is_active: true,
  });

  function changeTitle(e: ChangeEvent<HTMLInputElement>) {
    setProduct({ ...product, title: e.target.value });
  }

  function changePrice(e: ChangeEvent<HTMLInputElement>) {
    setProduct({
      ...product,
      price: e.target.value === "" ? "" : Number(e.target.value),
    });
  }

  function changeCount(e: ChangeEvent<HTMLInputElement>) {
    setProduct({
      ...product,
      count: e.target.value === "" ? "" : Number(e.target.value),
    });
  }

  function changeIsActive(e: ChangeEvent<HTMLInputElement>) {
    setProduct({ ...product, is_active: e.target.checked });
  }

  // =========================
  // 3
  // =========================

  // const products: ProductType[] = [
  //   {
  //     id: 1,
  //     title: "bread",
  //     price: 40,
  //     count: 10,
  //     is_active: true,
  //   },
  //   {
  //     id: 2,
  //     title: "milk",
  //     price: 60,
  //     count: 5,
  //     is_active: false,
  //   },
  // ];

  // const colors: string[] = ["white", "black", "green", "blue"];

  // const cards: CardType[] = [
  //   //Не доробив. Є тільки масив.
  //   {
  //     title: "React Basics",
  //     description: "Вступ до React та створення компонентів.",
  //     views: 1200,
  //     is_show: true,
  //   },
  //   {
  //     title: "TypeScript Fundamentals",
  //     description: "Основи роботи з типами в TypeScript.",
  //     views: 980,
  //     is_show: true,
  //   },
  //   {
  //     title: "Bootstrap Layout",
  //     description: "Створення адаптивних макетів за допомогою Bootstrap.",
  //     views: 750,
  //     is_show: false,
  //   },
  //   {
  //     title: "Django REST API",
  //     description: "Розробка REST API на Django REST Framework.",
  //     views: 1500,
  //     is_show: true,
  //   },
  //   {
  //     title: "Python for Data Analysis",
  //     description: "Обробка та аналіз даних за допомогою Python.",
  //     views: 2100,
  //     is_show: false,
  //   },
  // ];

  return (
    <>
      <Counter />
      <hr />
      <br />
      {/* 1 */}
      {/*
      <p>Value: {value}</p>
      <button onClick={handleIncrease}>Increase value</button>
      <button onClick={handleDecrease}>Decrease value</button>*/}
      {/* 2 */}
      <h3>Product</h3>
      <p>
        Title: {product.title} Price: {product.price} Count: {product.count}{" "}
        <br />
        {product.is_active ? "Active" : "Not active"}
      </p>
      <br />
      <hr />
      Title: <input type="text" value={product.title} onChange={changeTitle} />
      Price:{" "}
      <input type="number" value={product.price} onChange={changePrice} />
      Count:{" "}
      <input type="number" value={product.count} onChange={changeCount} />
      <br />
      Is active:
      <input
        type="checkbox"
        checked={product.is_active}
        onChange={changeIsActive}
      />
      {/* 3 */}
      {/* 
      {products.map((product: ProductType, index: number) => {
        return (
          <p key={index}>
            Title: {product.title} Price: {product.price}
          </p>
        );
      })}

      <ul>
        {colors.map((color: string, index: number) => {
          return <li key={index}>{color}</li>;
        })}
      </ul>
      */}
    </>
  );
}
