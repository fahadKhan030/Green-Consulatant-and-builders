import React, { useState, useEffect } from "react";
import UserContext from "./UserContext.jsx";
import Header from "./Header/Header.jsx";
import "./App.css";
import Footer from "./Footer/Footer.jsx";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("Fahad Khan");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <div className="h-6 w-6 border-t-2 border-b-2 border-black animate-spin rounded-full"></div>
      </div>
    );

  return (
    <UserContext.Provider
      value={{ user }}
      className="flex flex-col items-center justify-center mt-10"
    >
      <Header />
      <Footer />
      <img
        src={data.message}
        alt="Random Dog"
        className="mt-4 h-50 w-50 object-cover rounded-sm ml-10"
      />
    </UserContext.Provider>
  );
};

export default App;
