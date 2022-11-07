import { useContext } from 'react';
import { baseUrl } from '../..';
import { AppContext } from '../../pages/_app';
import { BsTrash } from 'react-icons/bs';

export const RemoveFromCart = ({ product }) => {
  const { cart, alterProduct } = useContext(AppContext);

  if (cart === null) {
    return;
  }

  const { id: cartId, products } = cart;
  const { id: productId } = product;

  let quantity = 0;
  let isInCart = false;
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      quantity = products[i].quantity;
      isInCart = true;
    }
  }
  const newCart = {};

  const onClick = () => {
    fetch(`${baseUrl}/carts/${cartId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json();
      })
      .then((_) => {
        alterProduct(productId, -quantity);
      });
  };
  return (
    <div>
      {isInCart ? (
        <button type="button" title="Remove from cart" onClick={onClick}>
          <BsTrash size={30} className="mx-4"></BsTrash>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
