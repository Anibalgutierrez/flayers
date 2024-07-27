// src/App.jsx
import React, { useState } from 'react';
import { Box, Flex, Text, Container, Center } from '@chakra-ui/react';
import DatePickerComponent from './components/DatePickerComponent';
import ImagenLocal from './components/ImagenLocal';
import ImagenVisitante from './components/ImagenVisitante';
import Horarios from './components/Horarios';
import Direccion from './components/Direccion';
import ValorEntrada from './components/ValorEntrada';
import ThemeSelectorModal from './components/ThemeSelectorModal';

/////////////////
import Guemes from './escudos/Guemes.png'

const imagesArray = [
  'https://via.placeholder.com/100?text=1',
  'https://via.placeholder.com/100?text=2',
  Guemes,
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVCt5vDtk682MGYfGqnj5uS3XPNkelGZ929oNY_Fv8Do0cBR23-gT3hzBg65OxykqO51eqp00sO7uUN4fefK3-jcwjqdF6zRQiGnN-YHFf2qKbh1EYMbPChAPbqlaPpf3-fb3KbdxnzsLSPKnMbQ2hXCZ1hgsjh05Kx4tbTm2ibrjusYm15zoy7zU4/s1600/adafi-50.png',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGiVNOGqtZEk_Cd-YxwFYJF2h2AP3gP2R8Dw0j_vpmiN89oedxUr5iRbSrZsdjyefMDPuael7xrsDDMo25zhcvqObfjbTJ0yAJLk9n6IDhPzGJuv8rzIJth71458e9jaF1cYMwPqOUgz4fqyIzmehvNEB8Tlc_vGqGORg5pJLyaTUT16cbVrtUYmHc/s1600/Ucha%2050.png',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizLayE6wtLwVLPKOuR_tc4yxBYJdVFSZ6wZEC5oSm6LM1Jr-E33ZrsqwZXV-n-F7uxFlfxGUhbFudMa1un8MtaftnMaAfygdoGfY1c10SX5L3_L2-r4TkYf9gfb_-J8zKOnJ9aBIxIGxZ2EADFt-haz1EbPEhwFgUEXLkzV-aJuvDSF9z4y7xPfIeH8is/s1600/Caseros%20Sud%2050.png',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDY5xT4vyXJx3El9pe0Xd8dHkf9fJ40g5LAyJCXkaMw4eBu8qCn9YzDTTFB5Wc5roSER4ptBmDWwZlOhU4ak_UZtFKHMZ-YsLC9B12W-Q81hHdXHRJHCKidXPiZAZC3LcNolx1Cz6mNNhyg8TQn0_7JdQzdo5XkgFN6LAk9E-CZ_PW3iKbM6AdYAMROGY/s1600/NuevaEstrella-50.png',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEir3A_denXvJjBjp4G1B7-IMNwFA_jNNvsOUhkNNm_g10roRn2yo51ZZdX2poZVLLWH2FDeTRzUWa9FpCFi1Xr00HZvw96b7rCtekQO6NMTl6CmJe0wU1bgUHeNygh4HeKXkqmwQT4yz5yp1CV7Us62vE_iHrqUqzNl5JggZLQQ4qmgrblsg-S4LCYM/s1600/Pablo%20Podesta-50.png',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQyttnHdForQGswSZv1o3ePtdpylQD72iR87TRF9uep1MDqmnQxAa6-Tbu70DzF0tFOeyYNGizu1Qqo6vH4OP9P9BZFe-WX0d7LRFxz948OBXQrmXdv546P19ZcpG4uB9fvf0ZT_Ybwc-5JGvh2vaWVIfCMuvdOQNaZBncoLiv4QCyHZ4t1kmHIJ-e/s1600/6%20estrellas-50.png',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMyOSvG0iOulmwxJmbtH2AIeLYqcIXdsJUWZ5Xufb4ZJf7GbqO5xBPFt2UEhstO2u07b9rcEOJ7w_HyaKdhG9EuFovblb-QFTRme0RpNQ7_X9lPiVrUmMRHJmP2lqQH2pXkuNCur4eCSKZwcS4w1bVYFA6bfi-R3V5ElGY_sQBX1NH64JHg5gfo-Of/s1600/Churruca%2050.png',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJgJEfpfwbMKix_LC2JzJp6bISAFaoFztxn8k3y0I5iXsuyrT3RnCrYU5teNcVNWRM4Fr1P-YnJc1QU6r9o6xwVzcFSq_AvCxqYosN1n9XDUzyWZFskR3TRN9nlX-_dlbjXzC7lxgdYnSo7o5Q5qRuC9yXeS8wuSBUBQ6y-xkWsniwxBNI0XJ0x-655oY/s1600/ElLibertador-50.png',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjK3KyMx7YUZ5UMvSjrlungrkJ__djRkJxtBxDS1KAH2yeLHuvTcMywXgoZOzh-sfLTqnsjbRihLB7sE82hRG95FC50JRSF1rbVh_ignSgMUjzdcUGDhi87WC_8n0qWxamrU_uVLwRbUfppkeQ5Iszq6o7HpurdVSg51eAPfb98xNNFY58tCq3fJPke4wQ/s1600/MartinFierro-50.png',
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
      <Box minH="100vh" p={5} alignContent={'center'}>
        <Center>
        <Text as='b' fontSize="2xl" onClick={toggleDatePicker} cursor="pointer" style={{ textTransform: 'uppercase' }}>
  {selectedDate.toLocaleDateString('es-ES', { weekday: 'long', month: 'long', day: 'numeric' })}
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
        <Direccion />
        <ValorEntrada />
      </Box>
      <ThemeSelectorModal />
    </Container>
  );
};

export default App;
