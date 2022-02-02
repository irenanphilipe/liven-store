//tipos
import { CartItemType } from '../../api/Api';
//estilos
import { Wrapper } from './Item.styles';
//componentes
import Button from '@material-ui/core/Button';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>
      Adicionar ao Carrinho
    </Button>
  </Wrapper>
);

export default Item;