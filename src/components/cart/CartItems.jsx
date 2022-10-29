import { useContext } from 'react';
import { AppContext } from '../../pages/_app';
import { CartLineItem } from './CartLineItem';

export const CartItems = () => {
  const { cart } = useContext(AppContext);

  if (cart === null) {
    return <></>;
  }

  const { products } = cart;

  if (products.length <= 0) {
    return <></>;
  }

  return (
    <table className="flex justify-center items-center w-full flex-col">
      <thead className="w-full border-b">
        <tr className="flex w-full mb-3 uppercase">
          <th className="text-sm lg:text-base w-4/12 lg:w-3/6">Product</th>
          <th className="text-sm lg:text-base w-4/12 lg:w-1/3 p-0 md:pl-18">
            Price
          </th>
          <th className="text-sm lg:text-base w-4/12 lg:w-1/3 p-0">Quantity</th>
          <th className="text-sm lg:text-base w-4/12 lg:w-1/3 p-0 lg:pr-18">
            Total
          </th>
        </tr>
      </thead>

      <tbody className="w-full flex flex-col flex-wrap lg:flex-nowrap gap-4 justify-center items-center">
        {products.map((product) => {
          return (
            <CartLineItem
              product={product}
              key={product.productId}
            ></CartLineItem>
          );
        })}
      </tbody>
    </table>
  );
};
