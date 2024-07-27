import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import DatePickerComponent from './DatePickerComponent';
import ImagenLocal from './ImagenLocal';
import ImagenVisitante from './ImagenVisitante';
import Horarios from './Horarios';
import Direccion from './Direccion';
import ValorEntrada from './ValorEntrada';
import Fondo from './Fondo';

// Array de imágenes de ejemplo
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
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Color de fondo inicial
  const [textColor, setTextColor] = useState('#000000');

  const cambiarColorFondo = (color) => {
    setBackgroundColor(color);
    setTextColor(color === '#000000' ? '#ffffff' : '#000000');
  };

  return (
    <Box minH="100vh" bg={backgroundColor} color={textColor} p={4}>
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
        <Text mx={2}>vs</Text>
        <ImagenVisitante
          visitorTeamLogo={visitorTeamLogo}
          setVisitorTeamLogo={setVisitorTeamLogo}
          imagesArray={imagesArray}
        />
      </Box>
      <Horarios />
      <Direccion/>
      <ValorEntrada/>
      </Box>

  );
};

export default App