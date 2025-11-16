import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItem({ cartItem }) {
  const [cartItems, setCartItems] = useContext(CartContext);

  function addItemQuantity(cartItem) {
    setCartItems((prev) => {
      return prev.map((item) =>
        item.quantity < item.stock && item.id === cartItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  }
  function subtractItemQuantity(cartItem) {
    setCartItems((prev) => {
      if (cartItem.quantity === 1) {
        removeItem(cartItem);
      }
      return prev.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  }

  function removeItem(cartItem) {
    setCartItems((prev) => {
      return prev.filter((e) => e.id !== cartItem.id);
    });
  }

  return (
    <>
      <div className="flex items-center justify-between border-b pb-4 mb-4 max-[400px]:flex-col">
        {/*  Showing the Item and Price in the Cart  */}

        <div className="flex items-center gap-4">
          <img
            src={cartItem.thumbnail}
            alt={cartItem.id}
            className="w-20 h-20 object-cover rounded-md"
          />
          <div>
            <h2 className="font-semibold text-gray-700 max-[540px]:text-sm">
              {cartItem.title}
            </h2>
            <p className="text-emerald-600 font-medium max-[540px]:text-sm">
              ${cartItem.price}
            </p>
          </div>
        </div>
        {/* Add , Subtract and Remove Functionality */}

        <div className="flex items-center gap-4 max-[540px]:gap-2">
          <div className="flex items-center border rounded-md ">
            <button
              className="px-2 py-1 text-gray-600 hover:bg-gray-200 max-[540px]:px-1 max-[540px]:py0"
              onClick={() => subtractItemQuantity(cartItem)}
            >
              -
            </button>
            <span className="px-3 max-[540px]:px-1 max-[540px]:text-sm">
              {cartItem.quantity}
            </span>
            <button
              className="px-2 py-1 text-gray-600 hover:bg-gray-200 max-[540px]:px-1 max-[540px]:text-sm"
              onClick={() => addItemQuantity(cartItem)}
            >
              +
            </button>
          </div>
          <button
            className="text-rose-500 hover:text-rose-600 font-semibold max-[540px]:px-1 max-[540px]:py0 max-[540px]:text-xs"
            onClick={() => removeItem(cartItem)}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
