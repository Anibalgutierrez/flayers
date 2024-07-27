import React, { useState } from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';

const Fondo = ({ onColorChange }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  const handleColorChange = (color) => {
    setSelectedColor(color);
    onColorChange(color);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Cambiar Fondo</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Selecciona un color de fondo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button onClick={() => handleColorChange('#000000')}>Negro</Button>
            <Button onClick={() => handleColorChange('#ffffff')}>Blanco</Button>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Fondo;
