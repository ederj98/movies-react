import { DivContainer } from '../../../../shared/components/Div/index';
import { FormActualizarPelicula } from '../../components/ActualizarPelicula/index';
import { Pelicula } from '../../models/Pelicula';
import PropTypes from 'prop-types';
import React from 'react';
import { useEffect } from 'react';

interface ActualizarPeliculaProps {
  pelicula: Pelicula;
  buscarPelicula: (id: number) => void;
  actualizarPelicula: (pelicula: Pelicula) => void;
  id: number,
}

export const ActualizarPelicula: React.FC<ActualizarPeliculaProps> = ({
  pelicula,
  buscarPelicula,
  actualizarPelicula,
  id,
}) => {
  useEffect(() => {
    buscarPelicula(id);
  }, [id, buscarPelicula]);
  return (
    <DivContainer>
        <FormActualizarPelicula
          pelicula={pelicula}
          onSubmit={actualizarPelicula}
          formTitle="Actualizar pelicula"
        />
    </DivContainer>
  );
};

ActualizarPelicula.propTypes = {
  pelicula: PropTypes.any.isRequired,
  buscarPelicula: PropTypes.func.isRequired,
  actualizarPelicula: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
