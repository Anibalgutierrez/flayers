// src/ThemeContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const ThemeContext = createContext();

const customTheme = (bgColor, textColor) => extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: bgColor,
        color: textColor,
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(customTheme('white', 'black'));

  const toggleTheme = () => {
    const newTheme = theme.styles.global['html, body'].backgroundColor === 'white'
      ? customTheme('blue', 'white')
      : customTheme('white', 'black');
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
