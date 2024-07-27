// src/ThemeContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const ThemeContext = createContext();

const themes = {
  default: extendTheme({
    styles: {
      global: {
        'html, body': {
          backgroundColor: 'white',
          color: 'black',
        },
      },
    },
  }),
  blue: extendTheme({
    styles: {
      global: {
        'html, body': {
          backgroundColor: 'blue',
          color: 'white',
        },
      },
    },
  }),
  pink: extendTheme({
    styles: {
      global: {
        'html, body': {
          backgroundColor: 'pink',
          color: 'black',
        },
      },
    },
  }),
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.default);

  const setThemeByName = (themeName) => {
    setTheme(themes[themeName]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemeByName }}>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
