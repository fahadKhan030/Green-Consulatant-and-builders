import React, { useReducer, useState } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload }];
    case "remove":
      return state.filter((todo) => todo.id !== action.payloads);
  }
}

const Footer = () => {
  const [state, dispatch] = useReducer(todoReducer, []);
  const [inputValue, setInputValue] = useState("");

  const timer = setTimeout(() => {
    console.log(inputValue);
  }, 1000);

  return (
    <div className="flex flex-col items-center justify-center">
      Footer
      <input
        type="text"
        className="border border-orange-400 rounded-sm"
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={}>ADD</button>
    </div>
  );
};

export default Footer;
