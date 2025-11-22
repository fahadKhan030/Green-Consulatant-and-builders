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
    <div>
      <div
        className={` px-2 py-2 rounded-2xl ${
          theme === "black" ? "bg-gray-900" : "bg-white"
        }`}
      >
        <h1>Blogs</h1>
        <div className="flex justify-center w-[400px] flex-col gap-2">
          <input
            placeholder="Title"
            type="text"
            value={InputValue.title}
            onChange={handleInput}
            className={`${
              theme === "black"
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
            }`}
          />
          <textarea
            placeholder="Description"
            type="text"
            value={InputValue.description}
            onChange={handleInput}
            className={`${
              theme === "black"
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
            }`}
          />
          <button
            onClick={AddData}
            className={`border-0 py-1 bg-blue-400 text-white  border-black rounded-sm ${
              theme === "light"
                ? "hover:bg-black text-white"
                : "hover:bg-blue-800"
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
