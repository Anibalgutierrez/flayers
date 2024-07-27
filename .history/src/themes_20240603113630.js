// themes.js
import { extendTheme } from '@chakra-ui/react';

const lightTheme = extendTheme({
  colors: {
    background: '#FFFFFF',
    text: '#000000',
  },
});

const darkTheme = extendTheme({
  colors: {
    background: '#1A202C',
    text: '#FFFFFF',
  },
});

export { lightTheme, darkTheme };
