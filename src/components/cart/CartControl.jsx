import Link from 'next/link';
import { useContext, useState } from 'react';
import { AppContext } from '../../pages/_app';
import { BsCart4 } from 'react-icons/bs';

export const CartControl = () => {
  const { cart } = useContext(AppContext);

  if (cart === null) {
    return <></>;
  }

  const { products } = cart;

  const cartQty = products.reduce((cartQty, product) => {
    const { quantity } = product;

    cartQty += quantity;

    return cartQty;
  }, 0);

  return (
    <ul className="border border-zinc-400">
      <li>
        <Link href="/cart">
          <a
            className="w-24 h-24 flex justify-center items-center"
            title="Cart"
          >
            {cartQty}
            <BsCart4 size={34}></BsCart4>
          </a>
        </Link>
      </li>
    </ul>
  );
};
