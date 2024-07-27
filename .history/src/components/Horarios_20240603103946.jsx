import React, { useState } from 'react';
import { Box, Text, Input, Center } from '@chakra-ui/react';

const Horarios = () => {
  const initialData = [
    { id: '1', categoria: 'Novena', horario: '08:00 AM' },
    { id: '2', categoria: 'Octava', horario: '09:00 AM' },
    { id: '3', categoria: 'Séptima', horario: '10:00 AM' },
    { id: '4', categoria: 'Sexta', horario: '11:00 AM' },
    { id: '5', categoria: 'Quinta', horario: '12:00 PM' },
    { id: '6', categoria: 'Cuarta', horario: '01:00 PM' },
    { id: '7', categoria: 'Reserva', horario: '02:00 PM' },
    { id: '8', categoria: 'Señors', horario: '03:00 PM' },
    { id: '9', categoria: 'Primera', horario: '04:00 PM' },
  ];

  const [data, setData] = useState(initialData);

  const updateHorario = (id, horario) => {
    const newData = data.map(item => item.id === id ? { ...item, horario } : item);
    setData(newData);
  };

  return (
    <Center>
      {data.map(item => (
        <Box key={item.id} display="flex" alignItems={'center'} justifyContent="space-between" mb={2} p={0} bg="gray.100" borderRadius="md">
          <Text fontWeight="bold">{item.categoria}</Text>
          <Input
            value={item.horario}
            onChange={(e) => updateHorario(item.id, e.target.value)}
          />
        </Box>
      ))}
    </Center>
  );
};

export default Horarios;
