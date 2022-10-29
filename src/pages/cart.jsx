import Head from 'next/head';
import {
  CartControl,
  CartItems,
  CartTotals,
  CartVoucher,
  ContinueShopping,
} from '../components/cart';
import { useCart } from '../hooks';
import { Layout } from '../layouts';

const Cart = () => {
  const cart = useCart(2);

  if (cart === null) {
    return <></>;
  }

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <Layout>
        <main className="container px-4 mx-auto mb-10">
          <header className="flex justify-between text-zinc-400">
            <div>
              <ContinueShopping></ContinueShopping>
            </div>

            <CartControl cart={cart}></CartControl>
          </header>

          <section className="mt-16 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 grid gap-y-10">
              <CartItems></CartItems>

              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <CartVoucher></CartVoucher>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <CartTotals></CartTotals>
            </aside>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Cart;
