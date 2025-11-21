import React from "react";
import { useState } from "react";

const Input = () => {
  const [InputValue, setInputValue] = useState({
    title: "",
    description: "",
  });

  const [Blog, setBlog] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const AddData = () => {};

  return (
    <div>
      <div>
        <h1>Blogs</h1>
        <div className="flex justify-center w-[400px] flex-col gap-2">
          <input
            placeholder="Title"
            type="text"
            value={InputValue.title}
            onChange={handleInput}
            className="border-black border-2 px-2 py-1 rounded-2xl"
          />
          <textarea
            placeholder="Description"
            type="text"
            value={InputValue.description}
            onChange={handleInput}
            className="border-black border-2 px-2 py-1 h-40 rounded-2xl"
          />
          <button
            onClick={AddData}
            className="border-0 py-1 bg-blue-400 text-white  border-black rounded-sm"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
