import React from 'react';
import { Box, Input, Text } from '@chakra-ui/react';

const Direccion = () => {
  return (
    <Box>
      <Text>Dirección:</Text>
      <Input placeholder="Direccion"  border="none" size='sm' />
    </Box>
  );
};

export default Direccion;