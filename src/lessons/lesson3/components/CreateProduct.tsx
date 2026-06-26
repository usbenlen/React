/** @format */

// Форму можна покращити. Але повинна зараз працювати (Форма поки що нічого не створює)

const CreateProduct = () => {
  return (
    <form
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
            placeholder="Наприклад: JBL GO 3"
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
            placeholder="https://..."
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
            placeholder="549"
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
            placeholder="899"
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
            min={1}
            max={5}
            placeholder="5"
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
            placeholder="24"
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
            className="
              h-4 w-4
              accent-red-500
            "
          />

          <span className="text-gray-700">В наявності</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="
              h-4 w-4
              accent-red-500
            "
          />

          <span className="text-gray-700">В обраному</span>
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
