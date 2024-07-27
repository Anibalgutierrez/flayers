import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const ImagenLocal = ({ localTeamLogo, setLocalTeamLogo, imagesArray }) => {
  return (
    <Box>
      <Image src={localTeamLogo} alt="Local Team Logo" />
      {/* Aquí podrías agregar un selector de imágenes */}
    </Box>
  );
};

export default ImagenLocal;
