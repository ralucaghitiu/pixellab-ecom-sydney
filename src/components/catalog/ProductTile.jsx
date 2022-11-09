import Link from 'next/link';
import Image from 'next/image';
import { AddToCart, RemoveFromCart } from '../../components/catalog';

export const ProductTile = ({ product }) => {
  const { title, price, image, id } = product;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <article className="w-full">
      <header>
        <div className="w-full text-center">
          <Link href={`/products/${id}`}>
            <a title={title}>
              <Image
                alt={`Image for product ${title}`}
                src={image}
                width={200}
                height={200}
                objectFit="contain"
                className="inline -z-10"
              ></Image>
            </a>
          </Link>
        </div>
      </header>

      <section className="text-center text-sm flex flex-col items-center justify-between mt-6 gap-3">
        <h1 className="uppercase text-zinc-400 mb-2">{title}</h1>

        <div className="text-zinc-900 font-light">{formattedPrice}</div>

        <div className="flex items-center justify-center my-3">
          <AddToCart product={product}></AddToCart>
          <RemoveFromCart product={product}></RemoveFromCart>
        </div>
      </section>
    </article>
  );
};
