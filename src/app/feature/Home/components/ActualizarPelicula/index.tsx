import { Button } from '../../../../shared/components/Button';
import { Pelicula } from '../../../Pelicula/models/Pelicula';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface BtnActualizarPeliculaProps {
  pelicula: Pelicula;
}

export const BtnActualizarPelicula: React.FC<BtnActualizarPeliculaProps> = ({
  pelicula,
}) => {
  const history = useHistory();
  const handleActualizar = () => history.push(`/movies/${pelicula.id}`);
  return (
    <Button onClick={handleActualizar}>
      <span role="img" aria-labelledby="trash">
      📝
      </span>
    </Button>
  );
};

BtnActualizarPelicula.propTypes = {
  pelicula: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
    stars: PropTypes.string.isRequired,
  }).isRequired,
};
