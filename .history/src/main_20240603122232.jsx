import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import './index.css';
import { lightTheme, darkTheme } from './themes';

const Root = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ChakraProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <App setTheme={setTheme} />
    </ChakraProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
