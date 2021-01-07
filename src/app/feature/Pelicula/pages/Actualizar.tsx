import { RouteComponentProps, useParams } from 'react-router-dom';
import { Layout } from '../../../shared/components/Layout';
import { ProveedorActualizarPelicula } from '../hoc/ProveedorActualizarPelicula';
import React from 'react';

const UpdateMainPage: React.FC<RouteComponentProps> = () => {
  const { id } = useParams();
  return (
    <Layout title="Peliculas" description="Gestión de peliculas">
      <ProveedorActualizarPelicula id={ id } />
    </Layout>
  );
};

UpdateMainPage.displayName = 'UpdateMainPage';

export default UpdateMainPage;
