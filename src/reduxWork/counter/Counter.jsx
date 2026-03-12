import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../feature/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(add())}>Add</button>

      <button onClick={() => dispatch(remove())}>Remove</button>
    </div>
  );
};

export default Counter;
