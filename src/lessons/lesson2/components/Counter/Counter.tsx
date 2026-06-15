/** @format */

import { useState } from "react";
// import "./Counter.css"; //Так не можна імпортувати стилі (але локально буде працювати)
import style from "@/lessons/lesson2/components/Counter/Counter.module.css"; //Набагато краще так. І також сам React згенерує назву класу щоб постійно було унікально типу _counter_i5v2jg_1
import Button from "@/lessons/lesson2/ui/Button"; //Компонент з ui

const Counter = () => {
  // function handlerClick(): void {
  //   setValue(value + 1);
  // }

  //task1 lesson3
  const handleIncrease = () => {
    if (value < 100) setValue(value + 10);
  };
  const handleDecrease = () => {
    if (value > 0) setValue(value - 10);
  };

  const [value, setValue] = useState(50);

  // return (
  //   <>
  //     <p className={style.Counter}>
  //       Value:{" "}
  //       <span style={value >= 250 ? { color: "red" } : { color: "purple" }}>
  //         {value}
  //       </span>
  //     </p>
  //     <button onClick={handlerClick}>Up</button>
  //   </>
  // );

  //task1

  const isMin = value === 0;
  const isMax = value === 100;

  return (
    <>
      <p className={isMin || isMax ? style.limit : style.value}>
        Value: {value}
      </p>
      <br />
      <button onClick={handleIncrease} className={isMax ? style.disabled : ""}>
        Increase value
      </button>
      <button onClick={handleDecrease} className={isMin ? style.disabled : ""}>
        Decrease value
      </button>

      <br />
      <br />
      <Button text="Click Me" />
    </>
  );
};

export default Counter;
