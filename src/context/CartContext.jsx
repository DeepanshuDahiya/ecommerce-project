import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const CartContext = createContext([]);

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

  return (
    <CartContext.Provider value={[cartItems, setCartItems]}>
      {children}
    </CartContext.Provider>
  );
}
