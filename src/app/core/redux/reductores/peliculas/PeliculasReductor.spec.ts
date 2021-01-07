import { actualizarPelicula, agregarNuevaPelicula,buscarPelicula, eliminarPelicula } from '../../acciones/peliculas/PeliculasAcciones';
import { EstadoPelicula } from '../../modelo/EstadoPelicula';
import { Pelicula } from '../../../../feature/Pelicula/models/Pelicula';
import reductorPeliculas from './peliculasReductor';

describe('Reductor peliculas', () => {
  it('debería agregar peliculas', () => {
    // Arrange
    const estadoInicial: EstadoPelicula = {
      peliculas: [],
      pelicula: {id: 0, name: '', director: '', writer: '', stars: ''}
    };
    const nuevaPelicula: Pelicula = {
        id: 1,
        name: 'Stargate',
        director: 'Eder',
        writer: 'The grinch',
        stars: 'John, Prim, Katniss',
    };
    const estadoEsperado: EstadoPelicula = {
      ...estadoInicial,
      peliculas: [nuevaPelicula],
    };

    // Act
    const nuevoEstado = reductorPeliculas(
      estadoInicial,
      agregarNuevaPelicula(nuevaPelicula)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería eliminar pelicula', () => {
    // Arrange
    const nuevaPelicula: Pelicula = {
        id: 1,
        name: 'Stargate',
        director: 'Eder',
        writer: 'The grinch',
        stars: 'John, Prim, Katniss',
    };
    const estadoInicial: EstadoPelicula = {
      peliculas: [nuevaPelicula],
      pelicula: {id: 0, name: '', director: '', writer: '', stars: ''}
    };
    const estadoEsperado: EstadoPelicula = {
      ...estadoInicial,
      peliculas: [],
    };

    // Act
    const nuevoEstado = reductorPeliculas(
      estadoInicial,
      eliminarPelicula(nuevaPelicula)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería buscar pelicula', () => {
    // Arrange
    const estadoInicial: EstadoPelicula = {
      peliculas: [],
      pelicula: {id: 0, name: '', director: '', writer: '', stars: ''}
    };
    const nuevaPelicula: Pelicula = {
      id: 1,
      name: 'Stargate',
      director: 'Eder',
      writer: 'The grinch',
      stars: 'John, Prim, Katniss',
  };
    const estadoEsperado: EstadoPelicula = {
      ...estadoInicial,
      pelicula: nuevaPelicula,
    };

    // Act
    const nuevoEstado = reductorPeliculas(
      estadoInicial,
      buscarPelicula(nuevaPelicula)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería actualizar pelicula', () => {
    // Arrange
    const nuevaPelicula: Pelicula = {
      id: 1,
      name: 'Stargate',
      director: 'Eder',
      writer: 'The grinch',
      stars: 'John, Prim, Katniss',
    };
    const estadoInicial: EstadoPelicula = {
      peliculas: [nuevaPelicula],
      pelicula: {id: 0, name: '', director: '', writer: '', stars: ''}
    };
    const estadoEsperado: EstadoPelicula = {
      ...estadoInicial,
      peliculas: [nuevaPelicula],
    };

    // Act
    const nuevoEstado = reductorPeliculas(
      estadoInicial,
      actualizarPelicula(nuevaPelicula)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
});
