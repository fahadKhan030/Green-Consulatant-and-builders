import React, { useState, useRef } from "react";

const ShopWatch = () => {
  const [second, setSecond] = useState(0);
  const Timmer = useRef(null);

  const StartTimmer = () => {
    if (Timmer.current !== null) return;
    Timmer.current = setInterval(() => {
      setSecond((prevSecond) => prevSecond + 1);
    }, 1000);
  };

  const StopTimmer = () => {
    if (Timmer.current === null) return;
    clearInterval(Timmer.current);
    Timmer.current = null;
  };

  const RestTimmer = () => {
    setSecond(0);
    if (Timmer.current !== null) {
      clearInterval(Timmer.current);
      Timmer.current = null;
    }
  };

  return (
    <div>
      <h1>Stop Watch</h1>
      <div>
        <span>{second}s</span>
        <div className="flex gap-2">
          <button
            onClick={StopTimmer}
            className="bg-blue-500 text-white px-2 rounded-sm hover:cursor-pointer"
          >
            Stop
          </button>

          <button
            onClick={StartTimmer}
            className="bg-blue-500 text-white px-2 rounded-sm hover:cursor-pointer"
          >
            Start
          </button>
          <button
            onClick={RestTimmer}
            className="bg-blue-500 text-white px-2 rounded-sm hover:cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopWatch;
