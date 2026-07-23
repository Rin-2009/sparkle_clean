import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Data = createContext();

export default function ContextData({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const changeTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    const elements = document.querySelectorAll(
      ".hidden-up, .hidden-left, .hidden-right",
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

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
