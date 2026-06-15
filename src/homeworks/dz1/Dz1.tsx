/** @format */

import BookInfo from "@/homeworks/dz1/components/BookInfo";
import CityInfo from "@/homeworks/dz1/components/CityInfo";
import CityInfoClass from "@/homeworks/dz1/components/CityInfoClass";

export default function Dz1() {
  const city = {
    name: "Чернівці",
    country: "Україна",
    founded: 1408,
    description:
      "Чернівці - культурний центр Буковини, відомий своєю архітектурою та Чернівецьким національним університетом",
  };

  const book = {
    title: "Шерлок Холмс",
    author: "Артур Конан Дойл",
    genre: "Детектив",
    pages: 307,
  };

  return (
    <div>
      <CityInfo city={city} />
      <br />
      <hr />
      <br />
      <CityInfoClass city={city} />
      <br />
      <hr />
      <br />
      <BookInfo book={book} />
    </div>
  );
}
