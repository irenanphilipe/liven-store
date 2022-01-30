import { useState } from 'react';
import { useQuery } from 'react-query';
//componentes
import Item from '../item/Item';
import { getProducts, CartItemType } from '../../api/Api';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import { Wrapper } from '../../App.styles';

function Home() {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);

  const handleAddToCart = (clickedItem: CartItemType) => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Algo deu errado...</div>;

  return(
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default Home;