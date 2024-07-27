import React from 'react';
import { Box, Center, Input, Text, Textarea } from '@chakra-ui/react';

const Direccion = () => {
  return (
    <Box  mt={5}>
        <Center>
      <Text>Dirección:</Text>
      </Center>
      <Center>
      <Textarea placeholder="Direccion"  border="none" size='sm' fontSize="xl" style={{ textAlign: 'center' }} />
      </Center>
    </Box>
  );
};

export default Direccion;
