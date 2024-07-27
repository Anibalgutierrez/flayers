// main.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import App from './App';
import './index.css';

// Definimos los temas
const lightTheme = extendTheme({
  colors: {
    background: '#FFFFFF',
    text: '#000000',
  },
});

const darkTheme = extendTheme({
  colors: {
    background: '#1A202C',
    text: '#FFFFFF',
  },
});

const Main = () => {
  const [theme, setTheme] = useState('light'); // Estado para almacenar el tema actual
  const { isOpen, onOpen, onClose } = useDisclosure(); // Estado para controlar si el modal está abierto

  // Función para cambiar el tema
  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    onClose(); // Cerrar el modal después de seleccionar el tema
  };

  return (
    <ChakraProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Button onClick={onOpen}>Cambiar Tema</Button> {/* Botón para abrir el modal */}
      {/* Modal para elegir el tema */}
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
      <App /> {/* Renderizamos la aplicación */}
    </ChakraProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />); // Renderizamos el componente Main en el root
