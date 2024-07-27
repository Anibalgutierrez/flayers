import React from 'react';
import { Box, Text, Input, Center } from '@chakra-ui/react';

const ValorEntrada = () => {
  return (
    <Center>
      <Text>Entrada $</Text>
      <Input placeholder="Valor" width="60px"  border="none" size='sm' />
    </Center>
  );
};

export default ValorEntrada;
