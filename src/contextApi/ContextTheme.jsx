import React, { createContext, useContext, useState } from "react";

const ContextTheme = createContext();

export default function ProviderTheme({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  return (
    <ContextTheme.Provider value={{ theme, toggleTheme }}>
      {children}
    </ContextTheme.Provider>
  );
}

export const useTheme = () => useContext(ContextTheme);
