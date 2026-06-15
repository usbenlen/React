/** @format */

import type { BookType } from "@/homeworks/dz1/types/BookType";
import Reviews from "@/homeworks/dz1/components/Reviews";

type BookProps = {
  book: BookType;
};

export default function BookInfo({ book }: BookProps) {
  return (
    <div>
      <h2>3.</h2>

      <p>
        <strong>Назва:</strong> {book.title}
      </p>
      <p>
        <strong>Автор:</strong> {book.author}
      </p>
      <p>
        <strong>Жанр:</strong> {book.genre}
      </p>
      <p>
        <strong>Кількість сторінок:</strong> {book.pages}
      </p>

      <Reviews />
    </div>
  );
}
