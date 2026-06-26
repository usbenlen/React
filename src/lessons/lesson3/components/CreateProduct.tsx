/** @format */

import type { ProductType } from "@/homeworks/dz3/types/ProductType";
import { useState, type ChangeEvent, type SubmitEvent } from "react";

type Props = {
  products: ProductType[];
  setProduct: (product: ProductType) => void;
};

const CreateProduct = ({ products, setProduct }: Props) => {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [imgURL, setImgURL] = useState<string>("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [rating, setRating] = useState("");
  const [reviewsCount, setReviewsCount] = useState("");

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newId =
      products.length > 0
        ? Math.max(...products.map((product) => product.id)) + 1
        : 1;

    const newProduct: ProductType = {
      id: newId,
      title,
      image: imgURL,
      price: Number(price),
      oldPrice: Number(oldPrice),
      rating: parseFloat(rating),
      reviewsCount: Number(reviewsCount),
      available: isAvailable,
    };

    setProduct(newProduct);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full max-w-2xl mx-auto
        bg-white
        rounded-2xl
        border border-gray-100
        shadow-sm
        p-6
        space-y-5

        transition-all duration-300
      "
    >
      <h2 className="text-2xl font-bold text-gray-800">Додати товар</h2>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">
            Назва товару
          </label>

          <input
            type="text"
            value={title}
            placeholder="Наприклад: JBL GO 3"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            className="
              rounded-xl
              border border-gray-200
              px-4 py-3
              outline-none

              focus:border-red-400
              focus:ring-4
              focus:ring-red-100

              transition
            "
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">
            URL зображення
          </label>

          <input
            type="text"
            value={imgURL}
            placeholder="https://example.com/image"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setImgURL(e.target.value)
            }
            className="
              rounded-xl
              border border-gray-200
              px-4 py-3
              outline-none

              focus:border-red-400
              focus:ring-4
              focus:ring-red-100

              transition
            "
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">
            Поточна ціна
          </label>

          <input
            type="number"
            value={price}
            placeholder="549"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPrice(e.target.value)
            }
            className="
              rounded-xl
              border border-gray-200
              px-4 py-3
              outline-none

              focus:border-red-400
              focus:ring-4
              focus:ring-red-100

              transition
            "
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">
            Стара ціна
          </label>

          <input
            type="number"
            value={oldPrice}
            placeholder="899"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setOldPrice(e.target.value)
            }
            className="
              rounded-xl
              border border-gray-200
              px-4 py-3
              outline-none

              focus:border-red-400
              focus:ring-4
              focus:ring-red-100

              transition
            "
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">Рейтинг</label>

          <input
            type="number"
            step={0.1}
            min={0}
            max={5}
            value={rating}
            placeholder="5"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setRating(e.target.value)
            }
            className="
              rounded-xl
              border border-gray-200
              px-4 py-3
              outline-none

              focus:border-red-400
              focus:ring-4
              focus:ring-red-100

              transition
            "
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">
            Кількість відгуків
          </label>

          <input
            type="number"
            min={0}
            value={reviewsCount}
            placeholder="24"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setReviewsCount(e.target.value)
            }
            className="
              rounded-xl
              border border-gray-200
              px-4 py-3
              outline-none

              focus:border-red-400
              focus:ring-4
              focus:ring-red-100

              transition
            "
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isAvailable}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setIsAvailable(e.target.checked)
            }
            className="
              h-4 w-4
              accent-red-500
            "
          />

          <span className="text-gray-700">В наявності</span>
        </label>
      </div>

      <button
        type="submit"
        className="
          flex items-center justify-center

          h-12 px-8

          rounded-xl

          bg-red-500
          text-white
          font-semibold

          transition-all duration-300

          hover:bg-red-600
          hover:shadow-lg
          active:scale-95
        "
      >
        Додати товар
      </button>
    </form>
  );
};

export default CreateProduct;
