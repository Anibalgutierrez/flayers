import React, { useState } from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import DatePickerComponent from './DatePickerComponent';
import ImagenLocal from './ImagenLocal';
import ImagenVisitante from './ImagenVisitante';
import Horarios from './Horarios';
import Direccion from './Direccion';
import ValorEntrada from './ValorEntrada';
import Fondo from './Fondo';

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
    <Box bg={backgroundColor} color={textColor} minH="100vh" p={5}>
      <Text fontSize="2xl" onClick={toggleDatePicker} cursor="pointer">
        {selectedDate.toDateString()}
      </Text>
      <DatePickerComponent
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        isOpen={isDatePickerOpen}
        onClose={toggleDatePicker}
      />
      <Flex justify="center" align="center" my={5}>
        <ImagenLocal localTeamLogo={localTeamLogo} setLocalTeamLogo={setLocalTeamLogo} imagesArray={imagesArray} />
        <Text mx={2}>vs</Text>
        <ImagenVisitante visitorTeamLogo={visitorTeamLogo} setVisitorTeamLogo={setVisitorTeamLogo} imagesArray={imagesArray} />
      </Flex>
      <Horarios />
      <Direccion />
      <ValorEntrada />
      <Fondo onColorChange={cambiarColorFondo} />
    </Box>
  );
};

export default App;
