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
              color: 'blue',
            },
          },
        },
        components: {
          Input: {
            baseStyle: {
              field: {
                fontWeight: 'bold',
                color: 'white',
              },
            },
          },
        },
      }),
  blue: extendTheme({
    styles: {
      global: {
        'html, body': {
          backgroundColor: '#3360CB',
          color: 'white',
        },
      },
    },
    components: {
        Input: {
          baseStyle: {
            field: {
              fontWeight: 'bold',
              backgroundColor: 'white'
            },
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
    components: {
        Input: {
          baseStyle: {
            field: {
              fontWeight: 'bold',
            },
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