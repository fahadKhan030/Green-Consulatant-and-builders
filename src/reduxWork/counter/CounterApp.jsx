import React from "react";
import { Provider } from "react-redux";
import store from "../counter/Store";
import Counter from "../feature/Store.js";

const CounterApp = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default CounterApp;
