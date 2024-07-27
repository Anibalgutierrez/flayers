import React, { useState } from 'react';
import { Box, Text, Input } from '@chakra-ui/react';

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
