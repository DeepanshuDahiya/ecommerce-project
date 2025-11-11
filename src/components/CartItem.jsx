export default function CartItem({ cartItem, setCartItems }) {
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
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        {/*  Showing the Item and Price in the Cart  */}

        <div className="flex items-center gap-4">
          <img
            src={cartItem.thumbnail}
            alt={cartItem.id}
            className="w-20 h-20 object-cover rounded-md"
          />
          <div>
            <h2 className="font-semibold text-gray-700">{cartItem.title}</h2>
            <p className="text-emerald-600 font-medium">${cartItem.price}</p>
          </div>
        </div>
        {/* Add , Subtract and Remove Functionality */}

        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-md">
            <button
              className="px-2 py-1 text-gray-600 hover:bg-gray-200"
              onClick={() => subtractItemQuantity(cartItem)}
            >
              -
            </button>
            <span className="px-3">{cartItem.quantity}</span>
            <button
              className="px-2 py-1 text-gray-600 hover:bg-gray-200"
              onClick={() => addItemQuantity(cartItem)}
            >
              +
            </button>
          </div>
          <button
            className="text-rose-500 hover:text-rose-600 font-semibold"
            onClick={() => removeItem(cartItem)}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
