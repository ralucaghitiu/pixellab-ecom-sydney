export const CartVoucher = () => {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        name="voucher"
        id="voucher"
        placeholder="Coupon Code"
        className="border border-zinc-300 py-3 px-3"
      />
      <button
        type="submit"
        title="Apply Coupon"
        className="border-2 border-black bg-transparent py-2 px-2 lg:px-8"
      >
        Apply Coupon
      </button>

      <div className="flex items-end justify-end">
        <button
          type="button"
          title="Update Cart"
          className="border bg-zinc-600 text-white text-center lg:text-xl hover:bg-zinc-500 p-3 cursor-pointer"
        >
          Update Cart
        </button>
      </div>
    </div>
  );
};
