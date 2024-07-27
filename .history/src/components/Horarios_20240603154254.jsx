import React, { useState } from 'react';
import { Box, Text, Input } from '@chakra-ui/react';

const Horarios = () => {
  const initialData = [
    { id: '1', categoria: 'Novena', horario: '10:20' },
    { id: '2', categoria: 'Octava', horario: '11:00' },
    { id: '3', categoria: 'Séptima', horario: '11:40' },
    { id: '4', categoria: 'Sexta', horario: '12:30' },
    { id: '5', categoria: 'Quinta', horario: '13:30' },
    { id: '6', categoria: 'Cuarta', horario: '14:30' },
    { id: '7', categoria: 'Reserva', horario: '15:30' },
    { id: '8', categoria: 'Señors', horario: '16:30' },
    { id: '9', categoria: 'Primera', horario: '17:30' },
  ];

  const [data, setData] = useState(initialData);

  const updateHorario = (id, horario) => {
    const newData = data
      .map(item => item.id === id ? { ...item, horario } : item)
      .filter(item => item.horario.toLowerCase() !== 'np');
    setData(newData);
  };

  return (
    <Box>
      {data.map(item => (
        <Box key={item.id} display="flex" alignItems="center" justifyContent="space-between" mb={1} px={2} border="md">
          <Text fontWeight="bold">{item.categoria}</Text>
          <Input
            border="none"
            size="sm"
            style={{ textAlign: 'right' }}
            value={item.horario}
            onChange={(e) => updateHorario(item.id, e.target.value)}
            fontSize="lg"  // Cambia "lg" por el tamaño que desees
          />
        </Box>
      ))}
    </Box>
  );
};

export default Horarios;
