import React, { useState } from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Image, SimpleGrid } from '@chakra-ui/react';

const ImagenLocal = ({ localTeamLogo, setLocalTeamLogo, imagesArray }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const selectImage = (image) => {
    setLocalTeamLogo(image);
    closeModal();
  };

  return (
    <Box>
      <Image src={localTeamLogo} alt="Local Team Logo" boxSize="70px" onClick={openModal} cursor="pointer" />
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Selecciona el logo del equipo local</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={3} spacing={4}>
              {imagesArray.map((image, index) => (
                <Image key={index} src={image} alt={`Logo ${index}`} boxSize="70px" onClick={() => selectImage(image)} cursor="pointer" />
              ))}
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ImagenLocal;
