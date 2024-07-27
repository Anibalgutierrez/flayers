import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';
import './index.css';

const lightTheme = extendTheme({
  colors: {
    // Define tus colores para el tema claro aquí
    // Por ejemplo:
    primary: '#007bff',
    secondary: '#6c757d',
  },
});

const darkTheme = extendTheme({
  colors: {
    // Define tus colores para el tema oscuro aquí
    // Por ejemplo:
    primary: '#17a2b8',
    secondary: '#6c757d',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={lightTheme}>
    <App />
  </ChakraProvider>
);

