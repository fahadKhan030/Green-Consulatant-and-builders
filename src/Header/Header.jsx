import React, { useContext, useRef, useEffect, useReducer } from "react";
import UserContext from "../UserContext.jsx";
// import { act } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "reset":
      return 0;
  }
}

const Header = () => {
  const { user } = useContext(UserContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const auto = useRef(null);

  useEffect(() => {
    auto.current.focus();
    console.log("wow its work");
  }, []);

  return (
    <div className=" flex items-center justify-center flex-col gap-10 text-xl font-semibold">
      <span>Header — Welcome {user}</span>
      <input
        type="text"
        className="border border-black p-1 rounded-2xl"
        ref={auto}
        placeholder="type Something.."
      />

      <div className="flex gap-2 ">
        <button
          className="border  border-red-500 rounded-xl shadow-2xl shadow-black p-1"
          onClick={() => dispatch({ type: "subtract" })}
        >
          -
        </button>
        <h1 className="mr-5 text-xl">Count: {state}</h1>
        <button
          className="border  border-red-500 rounded-xl shadow-2xl shadow-black p-1"
          onClick={() => dispatch({ type: "add" })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Header;
