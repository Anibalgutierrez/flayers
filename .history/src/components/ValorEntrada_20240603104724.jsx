import React from 'react';
import { Box, Text, Input } from '@chakra-ui/react';

const ValorEntrada = () => {
  return (
    <Box>
      <Text>Entrada $</Text>
      <Input placeholder="Valor" />
    </Box>
  );
};

export default ValorEntrada;
