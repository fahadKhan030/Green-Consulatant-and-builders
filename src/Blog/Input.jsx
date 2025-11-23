import React from "react";
import { useState } from "react";
import ThemeContext from "../Theme/ThemeContext.jsx";

const Input = () => {
  const [InputValue, setInputValue] = useState({
    title: "",
    description: "",
  });
  const { theme } = React.useContext(ThemeContext);
  const [Blog, setBlog] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const AddData = () => {};

  return (
    <div className="relative px-2 py-2 rounded-sm overflow-hidden">
      <div
        className={`absolute px-9 py-2 ${
          theme === "light"
            ? "h-full w-full rounded-sm bg-black -z-30 transition-all duration-300"
            : "w-10 h-10 bg-black opacity-0 rounded-full -z-30 transition-all duration-105"
        }`}
      ></div>
      <div px-2 py-2>
        <div className="fixed top-0 bg-black "></div>
        <h1>Blogs</h1>
        <div className="flex justify-center w-[400px] flex-col gap-2">
          <input
            placeholder="Title"
            type="text"
            value={InputValue.title}
            onChange={handleInput}
            className={`border-black px-1 py-2 rounded-sm ${
              theme === "light"
                ? "bg-white text-black"
                : "bg-white border border-black text-black"
            }`}
          />
          <textarea
            placeholder="Description"
            type="text"
            value={InputValue.description}
            onChange={handleInput}
            className={`px-1 py-2 rounded-sm ${
              theme === "light"
                ? "bg-white text-black"
                : "bg-white border border-black text-black"
            }`}
          />
          <button
            onClick={AddData}
            className={`rounded-sm ${
              theme === "light"
                ? "bg-white text-black"
                : "bg-blue-800 text-white"
            }`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
