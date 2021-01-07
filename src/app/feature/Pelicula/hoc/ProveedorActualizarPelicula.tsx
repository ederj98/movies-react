import {
  actualizarPeliculaAsync,
  buscarPeliculaAsync, 
} from '../../../core/redux/acciones/peliculas/PeliculasAcciones';
import { ActualizarPelicula } from '../containers/GestionPeliculas/Actualizar';
import { EstadoGeneral } from '../../../core/redux/modelo/EstadoGeneral';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
  return  state.peliculas ;
};

export const ProveedorActualizarPelicula = connect(mapStateToProps, {
  buscarPelicula: buscarPeliculaAsync,
  actualizarPelicula: actualizarPeliculaAsync,
})(ActualizarPelicula);
