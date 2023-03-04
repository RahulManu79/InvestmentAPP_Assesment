import { createContext, useState } from "react";

export const darkThemeContext = createContext();

export const DarkProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [theme, setTheme] = useState("light");

  return (
    <darkThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </darkThemeContext.Provider>
  );
};
