import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import useLocalStorage from "./hooks/useLocalStorage";
import NotFound from "./pages/NotFound";

const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));

export default function App() {
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [dataList, setDataList] = useLocalStorage("dataList", []);
  const [filteredData, setFilteredData] = useState([]);
  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    !categories.length &&
      fetch("https://dummyjson.com/products/categories")
        .then((res) => res.json())
        .then((category) => setCategories(category))
        .catch((error) => console.log(error));
  }, []);

  return (
    <Router>
      <Suspense fallback={<div>Loading Cart...</div>}>
        <Navbar
          setSearch={setSearch}
          search={search}
          setFilter={setFilter}
          categories={categories}
          setCategories={setCategories}
          filteredData={filteredData}
          isSuggestionOpen={isSuggestionOpen}
          setIsSuggestionOpen={setIsSuggestionOpen}
          cartItems={cartItems}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                dataList={dataList}
                setDataList={setDataList}
                search={search}
                filter={filter}
                filteredData={filteredData}
                setFilteredData={setFilteredData}
                setIsSuggestionOpen={setIsSuggestionOpen}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetail
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cartItems={cartItems}
                setCartItems={setCartItems}
                totalPrice={totalPrice}
              />
            }
          />
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
