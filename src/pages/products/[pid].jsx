// /products/2 /products/5 /products/21

import Head from 'next/head';
import { useRouter } from 'next/router';
import { CartControl, ContinueShopping } from '../../components/cart';
import { Layout } from '../../layouts';
import { BiLoaderCircle } from 'react-icons/bi';
import { useProduct } from '../../hooks';
import Image from 'next/image';
import { AddToCart } from '../../components/catalog';
import {
  RelatedProducts,
  ProductReview,
  RemoveFromCart,
} from '../../components/catalog';
import { RiChatSettingsFill } from 'react-icons/ri';

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { product, status } = useProduct(pid);

  if (product === null && status !== '404') {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <BiLoaderCircle size="48" className="animate-spin"></BiLoaderCircle>
      </div>
    );
  }

  if (status === '404') {
    return <span>Product not found</span>;
  }

  const { id, title, description, price, image, rating, category } = product;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  }).format(price);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Layout>
        <main>
          <header className="container px-4 lg:px-0 mx-auto flex justify-between">
            <div>
              <ContinueShopping></ContinueShopping>
            </div>

            <CartControl></CartControl>
          </header>

          <section className="mt-16 container px-4 lg:px-0 mx-auto grid gap-8 grid-cols-12">
            <div className="col-start-1 col-span-5">
              <Image
                alt={`Image of ${title}`}
                className="inline -z-10 w-full"
                src={image}
                width="650"
                height="650"
                objectFit="contain"
              ></Image>
            </div>

            <header className="col-start-7 col-span-6 pt-12">
              <h1 className="text-2xl uppercase font-medium">{title}</h1>
              <ProductReview
                stars={rating.rate}
                count={rating.count}
              ></ProductReview>
              <div className="mt-12">{description}</div>

              <div className="mt-12">
                <span className="text-3xl leading-9 font-bold">
                  {formattedPrice}
                </span>
              </div>

              <div className="mt-12 flex items-center">
                <AddToCart product={product}></AddToCart>
                <RemoveFromCart product={product}></RemoveFromCart>
              </div>
            </header>
          </section>
          <section className="border-t"></section>
          <section className="container px-4 lg:px-0 mx-auto mt-10">
            <h1 className="text-center uppercase mt-4 font-bold">
              Related products
            </h1>
            <RelatedProducts
              category={category}
              relatedId={id}
            ></RelatedProducts>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ProductPage;
