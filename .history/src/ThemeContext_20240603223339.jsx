// src/ThemeContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import camisetanegra from './escudos/camisetanegra.jpg'
import camisetaazul from './escudos/camisetaazul.jpg'
import canchablanco from './escudos/canchablanco.jpg'

const ThemeContext = createContext();

const themes = {
    default: extendTheme({
        styles: {
          global: {
            'html, body': {
              backgroundImage: `url(${canchablanco})`,
          backgroundSize: 'cover',
              color: '#3360CB',
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
  blue: extendTheme({
    styles: {
      global: {
        'html, body': {
          backgroundImage: `url(${camisetaazul})`,
          backgroundSize: 'cover',
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
  purpura: extendTheme({
    styles: {
      global: {
        'html, body': {
          backgroundColor: '#E124B3',
          color: 'white',
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
  black: extendTheme({
    styles: {
      global: {
        'html, body': {
          backgroundImage: `url(${camisetanegra})`,
          backgroundSize: 'cover',
          color: 'white',
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
