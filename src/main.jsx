import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SuggestionProvider from "./context/SuggestionContext.jsx";
import CartProvider from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <SuggestionProvider>
        <App />
      </SuggestionProvider>
    </CartProvider>
  </StrictMode>
);
