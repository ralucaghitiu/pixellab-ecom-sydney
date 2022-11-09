import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../..';
import { AddToCart } from './AddToCart';

export const RelatedProducts = ({ category, relatedId }) => {
  const [relatedProducts, setRelatedProducts] = useState(null);
  useEffect(() => {
    fetch(`${baseUrl}/products/category/${category}?limit=4`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setRelatedProducts(result);
      });
  }, [category]);

  if (relatedProducts === null) {
    return <></>;
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-2 my-4 mx-0">
      {relatedProducts.map((relatedProduct) => {
        const { title, price, image, id } = relatedProduct;
        const formattedPrice = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(price);

        if (category === category && relatedId !== id) {
          return (
            <div className="w-full text-center" key={id}>
              <section>
                <Link href={`/products/${id}`}>
                  <a title={title}>
                    <Image
                      src={image}
                      width={250}
                      height={250}
                      objectFit="contain"
                      className="inline -z-10"
                    ></Image>
                  </a>
                </Link>
              </section>

              <section className="flex flex-col mt-6 text-sm text-center items-center justify-between gap-4">
                <h1 className="inline">{title}</h1>
                <div className="text-zinc-900 font-bold">{formattedPrice}</div>

                <div>
                  <AddToCart product={relatedProduct}></AddToCart>
                </div>
              </section>
            </div>
          );
        }
      })}
    </div>
  );
};
