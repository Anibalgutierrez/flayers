// src/components/ThemeSelectorModal.jsx
import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useThemeContext } from '../ThemeContext.jsx';

const ThemeSelectorModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setThemeByName } = useThemeContext();

  const handleThemeChange = (themeName) => {
    setThemeByName(themeName);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Select Theme</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select a Theme</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Button onClick={() => handleThemeChange('default')}>Default</Button>
              <Button onClick={() => handleThemeChange('blue')}>Azul</Button>
              <Button onClick={() => handleThemeChange('black')}>Negro</Button>
              <Button onClick={() => handleThemeChange('pink')}>Rosa</Button>
              <Button onClick={() => handleThemeChange('purpura')}>Purpura</Button>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ThemeSelectorModal;
