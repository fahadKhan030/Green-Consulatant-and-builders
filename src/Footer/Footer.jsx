import React, { useContext, useReducer, useState } from "react";
import UserContext from "../UserContext";
import ThemeContext from "../Theme/ThemeContext";

function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload }];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

const Footer = () => {
  const { Name } = useContext(UserContext);
  const { theme, themeToogle } = useContext(ThemeContext);

  const [state, dispatch] = useReducer(todoReducer, []);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a valid input");
      setInputValue("");
      return;
    }
    dispatch({ type: "add", payload: inputValue });
    setInputValue("");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Footer {theme}</h2>

      <button
        onClick={themeToogle}
        className={
          theme === "light"
            ? "text-black bg-white border rounded-sm px-2 py-1"
            : "text-white bg-black border rounded-sm px-2 py-1"
        }
      >
        Toggle Theme
      </button>

      <input
        type="text"
        className="border border-orange-400 rounded-sm px-2 py-1"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        className="mt-2 bg-orange-400 text-white px-3 py-1 rounded-sm"
        onClick={handleAdd}
      >
        Add your Todos {Name}
      </button>

      <div className="mt-4">
        {state.map((todo) => (
          <div key={todo.id} className="flex items-center gap-2">
            <span>{todo.text}</span>
            <button
              className="text-red-500"
              onClick={() => dispatch({ type: "remove", payload: todo.id })}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
