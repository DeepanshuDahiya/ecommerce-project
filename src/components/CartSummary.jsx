import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CartSummary({ cartItems, totalPrice, setTotalPrice }) {
  let summaryTotalPrice = 0;
  cartItems.forEach((item) => {
    summaryTotalPrice += item.price * item.quantity;
  });
  useEffect(() => {
    setTotalPrice(parseFloat(summaryTotalPrice).toFixed(2));
  }, [summaryTotalPrice]);

  return (
    <div className="bg-gray-50 p-4 rounded-md mt-6">
      <div className="flex justify-between mb-2">
        <p className="text-gray-600">Subtotal</p>
        <p className="font-semibold">${totalPrice}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-gray-600">Shipping</p>
        <p className="text-emerald-600 font-semibold">Free</p>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between text-lg font-bold">
        <p>Total</p>
        <p className="text-emerald-600">${totalPrice}</p>
      </div>
      <Link to="/checkout">
        <button className="w-full mt-4 bg-emerald-500 text-white py-2 rounded-md font-semibold hover:bg-emerald-600 transition">
          Proceed to Checkout
        </button>
      </Link>
      <Link to="/">
        <button className="w-full mt-4 bg-amber-600 text-white py-2 rounded-md font-semibold hover:bg-amber-700 transition">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
