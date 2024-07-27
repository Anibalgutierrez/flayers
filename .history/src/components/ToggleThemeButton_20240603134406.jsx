// src/components/ToggleThemeButton.jsx
import React from 'react';
import { Button } from '@chakra-ui/react';
import { useThemeContext } from '../ThemeContext.jsx';

const ToggleThemeButton = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <Button onClick={toggleTheme}>
      Toggle Theme
    </Button>
  );
};

export default ToggleThemeButton;
