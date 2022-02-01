import { useState } from 'react';
import { useQuery } from 'react-query';
//componentes
import Item from '../item/Item';
import Cart from '../cart/Cart';
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
  
  const getTotalItems = (items: CartItemType[]) => 
    items.reduce((acc: number, item) => acc + item.amount, 0);
  
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. Verifica se o item já tá no carrinho
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // Adiciona item pela primeira vez
      return [...prev, { ...clickedItem, amount: 1 }];
    })
  };
  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((acc, item) => {
        if (item.id === id){
          if (item.amount === 1) return acc;
          return [...acc, {...item, amount: item.amount - 1}];
        } else {
          return [...acc, item]
        }
      }, [] as CartItemType[])
    ))
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Algo deu errado...</div>;

  return(
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart 
          cartItems={cartItems} 
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
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