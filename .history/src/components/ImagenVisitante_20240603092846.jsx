import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const ImagenVisitante = ({ visitorTeamLogo, setVisitorTeamLogo, imagesArray }) => {
  return (
    <Box>
      <Image src={visitorTeamLogo} alt="Visitor Team Logo" />
      {/* Aquí podrías agregar un selector de imágenes */}
    </Box>
  );
};

export default ImagenVisitante;
