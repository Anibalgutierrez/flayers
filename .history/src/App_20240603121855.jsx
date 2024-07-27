import React, { useState } from 'react';
import { Box, Flex, Text, Button, Center, Container } from '@chakra-ui/react';
import DatePickerComponent from './components/DatePickerComponent';
import ImagenLocal from './components/ImagenLocal';
import ImagenVisitante from './components/ImagenVisitante';
import Horarios from './components/Horarios';
import Direccion from './components/Direccion';
import ValorEntrada from './components/ValorEntrada';
import ThemeSelector from './components/ThemeSelector';

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
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  
  

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  return (
   
    <Container>
    <Box minH="100vh" p={5} alignContent={'center'} >
      <Center>
      <Text fontSize="2xl" onClick={toggleDatePicker} cursor="pointer">
      {selectedDate.toLocaleDateString('es-ES', { weekday: 'long',  month: 'long', day: 'numeric' })}

      </Text>
      </Center>
      <DatePickerComponent
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        isOpen={isDatePickerOpen}
        onClose={toggleDatePicker}
      />
      <Flex justify="space-around" align="center" my={5}>
        <ImagenLocal localTeamLogo={localTeamLogo} setLocalTeamLogo={setLocalTeamLogo} imagesArray={imagesArray} />
        <Text mx={2}>vs</Text>
        <ImagenVisitante visitorTeamLogo={visitorTeamLogo} setVisitorTeamLogo={setVisitorTeamLogo} imagesArray={imagesArray} />
      </Flex>
      <Horarios />
      <Direccion  />
      <ValorEntrada />
     
    </Box>
    <ThemeSelector setTheme={setTheme} />

    </Container>

  );
};

export default App;
