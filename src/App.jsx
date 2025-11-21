import React, { useState, useEffect } from "react";
import UserContext from "./UserContext.jsx";
import Header from "./Header/Header.jsx";
import Blog from "./Blog/Blogs.jsx";
import "./App.css";
import Footer from "./Footer/Footer.jsx";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [Name, setName] = useState("");
  const [user, setUser] = useState("");
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const handleNameInput = (e) => {
    setUser(e.target.value);
    console.log(user);
  };

  const handleAddName = () => {
    setName(user);
    setUser("");
    if (user === "") {
      alert("Please Enter your name");
    } else {
      setHidden(false);
    }
    console.log(Name);
  };

  if (loading)
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="h-6 w-6 border-t-2 border-b-2 border-black animate-spin rounded-full"></div>
      </div>
    );

  return (
    <UserContext.Provider
      value={{ Name }}
      className="flex flex-col items-center justify-center mt-10"
    >
      <div
        className={
          hidden
            ? "fixed flex items-center justify-center h-full top-0 right-0 backdrop-blur-3xl  w-full bg-gray-30 transform gap-2"
            : "hidden"
        }
      >
        <div className="flex  gap-1 flex-col bg- bg-white px-9 rounded-xl py-8">
          <input
            type="text"
            value={user}
            onChange={handleNameInput}
            className=" border h-10 border-black px-4 rounded-sm outline-0"
            placeholder="please enter your Name"
          />
          <button
            onClick={handleAddName}
            className=" border-black px-2 h-10 bg-blue-500 text-white border-0 rounded-sm"
          >
            add
          </button>
        </div>
      </div>
      <Header />
      <Footer />
      <img
        src={data.message}
        alt="Random Dog"
        className="mt-4 h-50 w-50 object-cover rounded-sm ml-10"
      />

      <Blog />
    </UserContext.Provider>
  );
};

export default App;
