import { useState } from 'react';
import { useQuery } from 'react-query';
//componentes
import { getProducts, CartItemType } from '../../api/Api';
import LinearProgress from '@material-ui/core/LinearProgress';


function Home() {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Algo deu errado...</div>;

  return(
    <h1>Home</h1>
  );
}

export default Home;