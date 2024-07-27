import React from 'react';
import { Box, Center, Input, Text } from '@chakra-ui/react';

const Direccion = () => {
  return (
    <Box  mt={5}>
        <Center>
      <Text>Dirección:</Text>
      </Center>
      <Center>
      <Input placeholder="Direccion"  border="none" size='sm' fontSize="xl" style={{ textAlign: 'center' }} />
      </Center>
    </Box>
  );
};

export default Direccion;
