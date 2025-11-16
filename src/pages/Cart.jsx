import { useContext } from "react";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { CartContext } from "../context/CartContext";

export default function Cart({ totalPrice, setTotalPrice }) {
  const [cartItems, setCartItems] = useContext(CartContext);
  return (
    <>
      {cartItems.length === 0 ? (
        <h2 className="flex items-center justify-center text-3xl pt-8">
          Your Bag is empty !!
        </h2>
      ) : (
        <div>
          <div className="w-full  ">
            <h2 className="flex items-center justify-center text-3xl pt-8">
              Your Bag{" "}
              <span className="mx-3 text-xl font-light">
                {" "}
                {cartItems.length} item(s)
              </span>
            </h2>
          </div>
          <div className="p-6">
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md p-6 border border-gray-400 max-[540px]:p-2">
              {cartItems.map((cartItem) => {
                return (
                  <CartItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    setCartItems={setCartItems}
                    totalPrice={totalPrice}
                    setTotalPrice={setTotalPrice}
                  />
                );
              })}
              <CartSummary
                cartItems={cartItems}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
