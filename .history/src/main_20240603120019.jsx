import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import './index.css';
import { lightTheme, darkTheme } from './themes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider  theme={theme === 'light' ? lightTheme : darkTheme}>
    <App />
  </ChakraProvider>
);
