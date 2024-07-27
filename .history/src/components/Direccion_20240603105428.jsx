import React from 'react';
import { Box, Input, Text } from '@chakra-ui/react';

const Direccion = () => {
  return (
    <Box>
      <Text>Dirección del evento</Text>
      <Input placeholder="Direccion"  border="none" />
    </Box>
  );
};

export default Direccion;
