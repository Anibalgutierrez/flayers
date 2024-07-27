import React, { useState } from 'react';
import { Box, Flex, Text, Button, Center } from '@chakra-ui/react';
import DatePickerComponent from './components/DatePickerComponent';
import ImagenLocal from './components/ImagenLocal';
import ImagenVisitante from './components/ImagenVisitante';
import Horarios from './components/Horarios';
import Direccion from './components/Direccion';
import ValorEntrada from './components/ValorEntrada';
import Fondo from './components/Fondo';

const imagesArray = [
  'https://via.placeholder.com/100?text=1',
  'https://via.placeholder.com/100?text=2',
  'https://via.placeholder.com/100?text=3',
  'https://via.placeholder.com/100?text=4',
  'https://via.placeholder.com/100?text=5',
  'https://via.placeholder.com/100?text=6',
  'https://via.placeholder.com/100?text=7',
  'https://via.placeholder.com/100?text=8',
  'https://via.placeholder.com/100?text=9',
  'https://via.placeholder.com/100?text=10',
];

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [localTeamLogo, setLocalTeamLogo] = useState(imagesArray[0]);
  const [visitorTeamLogo, setVisitorTeamLogo] = useState(imagesArray[1]);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const cambiarColorFondo = (color, textColor) => {
    setBackgroundColor(color);
    setTextColor(textColor);
  };

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  return (
    <Center minH="100vh" bg={backgroundColor} color={textColor}>
    <Box p={5}>
      <DatePickerComponent
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <Box display="flex" justifyContent="center" alignItems="center" my={4}>
        <ImagenLocal
          localTeamLogo={localTeamLogo}
          setLocalTeamLogo={setLocalTeamLogo}
          imagesArray={imagesArray}
        />
        <Box mx={4}>vs</Box>
        <ImagenVisitante
          visitorTeamLogo={visitorTeamLogo}
          setVisitorTeamLogo={setVisitorTeamLogo}
          imagesArray={imagesArray}
        />
      </Box>
      <Horarios />
      <Direccion />
      <ValorEntrada />
      <Fondo onColorChange={cambiarColorFondo} />
    </Box>
  </Center>
  );
};

export default App;
