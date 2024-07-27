import React from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Center } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({ selectedDate, setSelectedDate, isOpen, onClose }) => {
  const handleDateChange = (date) => {
    setSelectedDate(date);
    onClose(); // Cerrar el modal después de seleccionar la fecha
  };

  return (
    <Center>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Selecciona la fecha</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <DatePicker selected={selectedDate} onChange={handleDateChange} inline />
        </ModalBody>
      </ModalContent>
    </Modal>
    </Center>
  );
};

export default DatePickerComponent;
