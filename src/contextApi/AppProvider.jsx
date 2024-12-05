import React from "react";
import ProviderLanguage from "./ContextLanguage";
import ProviderTheme from "./ContextTheme";

export const AppProvider = ({ children }) => {
  return (
    <ProviderLanguage>
      <ProviderTheme>{children}</ProviderTheme>
    </ProviderLanguage>
  );
};
