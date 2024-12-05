import React, { createContext, useContext, useState } from "react";

const ContextLanguage = createContext();

export default function ProviderLanguage({ children }) {
  //console.log(navigator.language);
  const [language, setLanguage] = useState(navigator.language);
  const switchLanguage = () =>
    setLanguage((lang) => (lang === "en" ? "tr" : "en"));
  return (
    <ContextLanguage.Provider value={{ language, switchLanguage }}>
      {children}
    </ContextLanguage.Provider>
  );
}

export const useLanguage = () => useContext(ContextLanguage);
