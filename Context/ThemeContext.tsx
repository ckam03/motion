import React, { createContext, useEffect, useState } from "react";

const ThemeState = {
  toggleTheme: true,
  setToggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeState>(ThemeState);

export const ThemeProvider: React.FC = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState<boolean>(true);

   useEffect(() => {
     setToggleTheme(!toggleTheme);
   }, []);

// const rawSetTheme = (rawTheme: any) => {
//     const root = window.document.documentElement;
//     const isDark = rawTheme === 'dark';

//     root.classList.remove(isDark ? 'light' : 'dark');
//     root.classList.add(rawTheme);

//     localStorage.setItem('color-theme', rawTheme);
// };

// React.useEffect(() => {
//     rawSetTheme(toggleTheme);
// }, [toggleTheme]);
  return (
    <ThemeContext.Provider value={{ toggleTheme, setToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
