import React, { useState, useEffect, useRef } from "react";
import UserContext from "./UserContext.jsx";
import Header from "./Header/Header.jsx";
import Blog from "./Blog/Blogs.jsx";
import "./App.css";
import Footer from "./Footer/Footer.jsx";
import ThemeProvider from "./Theme/ThemeProvider.jsx";
import Stopwatch from "./StopWatch/ShopWatch.jsx";
import Dogs from "./Suspence/Dogs.jsx";
import TextAni from "./Animation/TextAni.jsx";
import Timeline from "./Animation/Timeline.jsx";

const App = () => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [Name, setName] = useState("");
  const [user, setUser] = useState("");
  const [hidden, setHidden] = useState(true);

  const inputRef = useRef(null);

  // Auto-focus when modal becomes visible
  useEffect(() => {
    if (!hidden) {
      inputRef.current?.focus();
    }
  }, [hidden]);

  const handleNameInput = (e) => {
    setUser(e.target.value);
  };

  const handleAddName = () => {
    if (user === "") {
      alert("Please Enter your name");
      return;
    }

    setName(user);
    setUser("");
    setHidden(false);
  };

  return (
    <ThemeProvider>
      <UserContext.Provider
        value={{ Name }}
        className="flex flex-col items-center justify-center mt-10"
      >
        {/* <Dogs /> */}
        {/* Modal */}
        <div
          className={
            hidden
              ? "fixed flex items-center justify-center h-full top-0 -z-90 right-0 backdrop-blur-3xl w-full bg-gray-30 transform gap-2"
              : "hidden"
          }
        >
          <div className="flex gap-1 flex-col bg-white px-9 opacity-0 rounded-xl py-8">
            {/* ✔ Correct ref here */}
            <input
              ref={inputRef}
              type="text"
              value={user}
              onChange={handleNameInput}
              onKeyDown={() => {
                if (event.key === "Enter") {
                  handleAddName();
                }
              }}
              className="border h-10 border-black px-2 rounded-sm outline-0"
              placeholder="Please enter your Name"
            />

            <button
              onClick={handleAddName}
              className="border-black px-2 h-10 bg-blue-500 text-white border-0 rounded-sm"
            >
              add
            </button>
          </div>
        </div>

        <Header />
        <Footer />

        <TextAni />
        <Timeline />
        {/* <img
          src={data.message}
          alt="Random Dog"
          className="mt-4 h-50 w-50 object-cover rounded-sm ml-10"
        /> */}
        <Stopwatch />
        <Blog />
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
