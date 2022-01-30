import { useState } from 'react';
import { useQuery } from 'react-query';
//componentes
import Item from '../item/Item';
import { getProducts, CartItemType } from '../../api/Api';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import { Wrapper, StyledButton } from '../../App.styles';
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Home() {
  const [ cartOpen, setCartOpen ] = useState(false);
  const [ cartItems, setCartItems ] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);
  
  const getTotalItems = (items: CartItemType[]) => null
  const handleAddToCart = (clickedItem: CartItemType) => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Algo deu errado...</div>;

  return(
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        Carrinho aqui
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
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