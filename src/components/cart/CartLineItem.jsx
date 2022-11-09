import Image from 'next/image';
import Link from 'next/link';
import { useProduct } from '../../hooks';
import { useContext } from 'react';
import { ProductReview } from '../catalog';
import { AppContext } from '../../pages/_app';
import { BsTrash } from 'react-icons/bs';
import { baseUrl } from '../..';

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: cartItem } = useProduct(productId);
  const isLoaded = cartItem !== null;
  const { cart, alterProduct } = useContext(AppContext);

  if (!isLoaded) {
    return <></>;
  }

  const { id: cartId, products } = cart;
  const { image, price, id, title, rating } = cartItem;

  let singleProduct = false;

  for (let i = 0; i < products.length; i++) {
    if (quantity === 1) {
      singleProduct = true;
    }
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price * quantity);

  const formattedPricePerProduct = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

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
    <tr className="flex justify-between items-center w-full border-b p-2">
      <td>
        <button
          type="button"
          title="Remove from cart"
          className="p-2 bg-zinc-500 text-white border hover:bg-zinc-700"
          onClick={() => {
            const confirmDelete = window.confirm(
              `Are you sure you want to remove product: ${title} from cart?`,
            );
            if (confirmDelete) alterProduct(id, -quantity);
            else return;
          }}
        >
          X
        </button>
      </td>

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

        <div className="ml-3">
          <Link href={`/products/${id}`}>
            <a title="title" className="text-sm w-2/4 lg:text-base">
              {title}
            </a>
          </Link>
          <ProductReview
            stars={rating.rate}
            count={rating.count}
          ></ProductReview>
        </div>
      </td>
      <td className="w-1/6 text-sm lg:text-base">{formattedPricePerProduct}</td>
      {/* <td>
        {singleProduct ? (
          <button type="button" title="remove from cart" onClick={onClick}>
            <BsTrash
              size={40}
              className="mx-4 p-2 border border-zinc-700 rounded-full hover:bg-zinc-700 hover:text-white"
            ></BsTrash>
          </button>
        ) : (
          <></>
        )}
      </td> */}

      <td className="w-1/6 text-sm px-4 lg:p-0 lg:text-center lg:text-base lg:mr-6">
        <div className="border flex flex-col lg:flex-row items-center justify-center">
          {/* <button
            type="button"
            title="Decrease"
            className="p-4"
            onClick={() => {
              alterProduct(id, -1);
            }}
          >
            -
          </button> */}
          {quantity === 1 ? (
            <span className="cursor-pointer">
              <BsTrash
                onClick={() => {
                  alterProduct(id, -1);
                }}
              ></BsTrash>
            </span>
          ) : (
            <button
              type="button"
              title="Decrease"
              className="p-2"
              onClick={() => {
                alterProduct(id, -1);
              }}
            >
              -
            </button>
          )}
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
      </td>

      <td className="w-1/6 text-sm lg:text-base ml-2 lg:ml-10 lg:p-6">
        {formattedPrice}
      </td>
    </tr>
  );
};
