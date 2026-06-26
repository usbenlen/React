/** @format */

import { useRef, useState } from "react";

export default function FormTask1() {
  const emailRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const focusEmail = () => {
    emailRef.current?.focus();
  };

  const clearFields = () => {
    setName("");
    setEmail("");
  };

  return (
    <div className="p-6 flex flex-col gap-6 max-w-sm">
      <div>
        <label>Ім'я</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label>Email</label>
        <input
          ref={emailRef}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>

      <div className="flex gap-2 text-white">
        <button
          onClick={focusEmail}
          className="bg-blue-500 px-4 py-2 rounded cursor-pointer"
        >
          Перейти до Email
        </button>

        <button
          onClick={clearFields}
          className="bg-red-500 px-4 py-2 rounded cursor-pointer"
        >
          Очистити всі поля
        </button>
      </div>
    </div>
  );
}
