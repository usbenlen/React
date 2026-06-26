/** @format */

// import { useRef, useEffect } from "react";
// import FormTask1 from "./components/FormTask1";
import Dz3 from "@/homeworks/dz3/Dz3";
import CreateProduct from "./components/CreateProduct";

export default function Lesson3() {
  // const refDiv = useRef(null);
  // useEffect(() => {
  //   console.log(refDiv.current);
  // }, []);
  return (
    <>
      {/* <div ref={refDiv}>Block</div> */}
      {/* <FormTask1 /> */}
      <Dz3 />{" "}
      {/*Пішла частина пари про картки продуктів (використав ту що вже була) */}
      <CreateProduct />
    </>
  );
}
