import React from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';

const ThemeSelector = ({ setTheme }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleThemeChange = (theme) => {
    setTheme(theme);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Cambiar Tema</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Selecciona un tema</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button onClick={() => handleThemeChange('light')}>Tema Claro</Button>
            <Button onClick={() => handleThemeChange('dark')}>Tema Oscuro</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ThemeSelector;
