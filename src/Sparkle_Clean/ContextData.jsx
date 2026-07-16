import { createContext, useContext, useEffect, useState } from "react";

const Data = createContext();

export default function ContextData({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Data.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </Data.Provider>
  );
}

export const data = () => useContext(Data);
