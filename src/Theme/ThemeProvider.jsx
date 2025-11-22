import React, { useState } from "react";
import ThemeContext from "../Theme/ThemeContext.jsx";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const themeToogle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToogle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
