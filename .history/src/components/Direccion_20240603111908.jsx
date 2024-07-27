import React from 'react';
import { Box, Center, Input, Text } from '@chakra-ui/react';

const Direccion = () => {
  return (
    <Box  mt={5}>
        <Center>
      <Text>Dirección:</Text>
      <Input placeholder="Direccion"  border="none" size='sm' />
      </Center>
    </Box>
  );
};

export default Direccion;
