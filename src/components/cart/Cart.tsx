import CartItem from "../cartItem/CartItem";

import { Wrapper } from './Cart.styles';

import { CartItemType } from "../../api/Api";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Seu carrinho</h2>
      {cartItems.length === 0 ? <p>Não há itens no carrinho</p> : null}
      {cartItems.map(item => (
        <CartItem
           key={item.id}
           item={item}
           addToCart={addToCart}
           removeFromCart={removeFromCart}
        />
      ))}
    </Wrapper>
  );
}

export default Cart;