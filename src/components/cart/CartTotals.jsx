import { useContext } from 'react';
import { AppContext } from '../../pages/_app';
import { Checkout } from './Checkout';

export const CartTotals = () => {
  const { cart } = useContext(AppContext);

  return (
    <>
      <header className="bg-zinc-300 text-black font-bold uppercase p-2">
        <h1>Cart Totals</h1>
      </header>

      <section>
        <div>
          <div className="border-b py-3">Subtotal:</div>

          <div className="border-b py-3">
            <form className="flex gap-3">
              <label>Shipping:</label>

              <div className="flex flex-col gap-3 justify-start items-start">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="standard"
                    name="standard"
                    value="standard"
                  ></input>
                  <label htmlFor="standard">Standard (Free)</label>
                </div>

                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="express"
                    name="express"
                    value="express"
                  ></input>
                  <label htmlFor="express">Express ($49.00)</label>
                </div>
              </div>
            </form>
          </div>

          <div className="border-b py-3 font-bold">Total: $4013.00 </div>
        </div>
      </section>

      <footer className="mt-6">
        <Checkout></Checkout>
      </footer>
    </>
  );
};
