import React from 'react';
import { Box, Text, Input } from '@chakra-ui/react';

const ValorEntrada = () => {
  return (
    <Box display="flex" alignItems="center">
      <Text>Entrada $</Text>
      <Input placeholder="Valor" width="100px"  />
    </Box>
  );
};

export default ValorEntrada;