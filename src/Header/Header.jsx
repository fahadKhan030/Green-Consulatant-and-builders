import React, {
  useContext,
  useRef,
  useEffect,
  useReducer,
  useState,
} from "react";
import UserContext from "../UserContext.jsx";

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
  const [input, setInput] = useState("");
  const [value, setValue] = useState([]);

  const todos = value.length;

  useEffect(() => {
    auto.current.focus();
  }, []);

  const change = (event) => {
    setInput(event.target.value);
  };

  const editTodo = (index) => {
    setInput(value[index]);
    remove(index);
    auto.current.focus();
  };

  const Click = () => {
    if (input.trim() === "") {
      alert("Please enter a valid input");
      return;
    }
    setValue([...value, input]);
    setInput("");
  };

  const remove = (indextoRemove) => {
    setValue(value.filter((_, index) => indextoRemove !== index));
  };

  return (
    <div className=" flex items-center justify-center flex-col gap-10 text-xl font-semibold">
      <span className="text-5xl">Welcome {user}</span>
      <div className="flex flex-col gap-3">
        <div className="flex  gap-2">
          <input
            type="text"
            className="border border-black p-2   rounded-2xl"
            onChange={change}
            value={input}
            ref={auto}
            placeholder="type Something.."
          />
          <button
            onClick={Click}
            className="border bg-green-300 border-black rounded-sm p-1"
          >
            add
          </button>
        </div>
        <div className=" flex flex-col  items-center justify-between px-2 py-1 gap-2 rounded-xl">
          {value.map((val, index) => (
            <h6
              key={index}
              className="flex gap-2 bg-gray-400  rounded-2xl w-full px-2 py-1   justify-between"
            >
              <span className="mx-2">.{val}</span>
              <div className="flex items-center justify-center gap-2">
                <button
                  className="bg-amber-50 px-2 rounded-2xl"
                  onClick={() => remove(index)}
                >
                  R
                </button>
                <button
                  className="bg-amber-50 px-2 rounded-2xl"
                  onClick={() => editTodo(index)}
                >
                  E
                </button>
              </div>
            </h6>
          ))}
        </div>
      </div>
      <span>Total todos: {todos}</span>
      <div className="flex gap-2 ">
        <button
          className="border  border-red-500 rounded-xl shadow-2xl shadow-black px-3"
          onClick={() => dispatch({ type: "subtract" })}
          disabled={state === 0}
        >
          -
        </button>
        <h1 className="mr-5 text-xl">Count: {state}</h1>
        <button
          className="border  border-green-500 rounded-xl shadow-2xl shadow-black px-3"
          onClick={() => dispatch({ type: "add" })}
        >
          +
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>rest</button>
      </div>
    </div>
  );
};

export default Header;
