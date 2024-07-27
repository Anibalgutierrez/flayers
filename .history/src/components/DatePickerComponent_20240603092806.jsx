import React, { useState } from 'react';
import { Box, Input } from '@chakra-ui/react';

const DatePickerComponent = ({ selectedDate, setSelectedDate }) => {
  const handleChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <Box>
      <Input
        type="date"
        value={selectedDate}
        onChange={handleChange}
      />
    </Box>
  );
};

export default DatePickerComponent;
