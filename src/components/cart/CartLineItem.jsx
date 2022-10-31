import Image from 'next/image';
import Link from 'next/link';
import { useProduct } from '../../hooks';
import { useContext } from 'react';
import { ProductReview } from '../catalog';
import { AppContext } from '../../pages/_app';

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: cartItem } = useProduct(productId);
  const isLoaded = cartItem !== null;
  const { alterProduct } = useContext(AppContext);

  if (!isLoaded) {
    return <></>;
  }

  const { image, price, id, title, rating } = cartItem;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price * quantity);

  const formattedPricePerProduct = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <tr className="flex justify-between items-center w-full border-b p-2">
      <td className="flex w-3/6">
        <Link href={`/products/${id}`}>
          <a title={title}>
            <Image
              src={image}
              width="100"
              height="100"
              objectFit="contain"
              className="inline -z-10"
            ></Image>
          </a>
        </Link>

        <div className="flex flex-col items-start justify-start gap-3">
          <Link href={`/products/${id}`}>
            <a title="title" className="font-medium">
              {title}
            </a>
          </Link>
          <ProductReview
            stars={rating.rate}
            count={rating.count}
          ></ProductReview>
        </div>
        <td></td>
      </td>
      <td className="text-center px-2">{formattedPricePerProduct}</td>
      <td>
        <div className="border">
          <div className="border">
            <button
              type="button"
              title="Decrease"
              className="p-4"
              onClick={() => {
                alterProduct(id, -1);
              }}
            >
              -
            </button>
            {quantity}
            <button
              type="button"
              title="Increase"
              className="p-4"
              onClick={() => {
                alterProduct(id, 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </td>
      <td className="text-center px-2">{formattedPrice}</td>
    </tr>
  );
};
