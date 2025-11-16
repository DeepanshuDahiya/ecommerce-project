import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { useContext, useEffect, useState } from "react";
import SearchSuggestion from "./SearchSuggestion";
import { SuggestionContext } from "../context/SuggestionContext";
import { CartContext } from "../context/CartContext";

export default function Navbar({
  search,
  setFilter,
  setSearch,
  categories,
  filteredData,
}) {
  const [input, setInput] = useState("");
  const [cartItems] = useContext(CartContext);
  const [isSuggestionOpen, setIsSuggestionOpen] = useContext(SuggestionContext);

  let cartItemCount = 0;
  cartItems.forEach((item) => {
    cartItemCount += item.quantity;
  });

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearch(input);
    }, 300);
    return () => {
      clearTimeout(timerId);
    };
  }, [input]);

  return (
    <div
      className="h-20 shadow-lg flex items-center bg-emerald-600 text-white"
      onClick={() => setIsSuggestionOpen(false)}
    >
      <div className="w-[85%] flex items-center mx-auto justify-between max-[540px]:w-[96%]">
        <div className="logo hover:cursor-pointer max-[540px]:text-md">
          <Link to="/">
            <span className="font-bold">UrbanCart</span>
          </Link>
        </div>

        {/* Search box and search functionality */}

        <div className="search-bar flex flex-col text-black">
          <input
            className="bg-white outline-none px-3 w-[25vw] h-10 rounded-xl shadow-lg max-[540px]:px-1 max-[540px]:h-7 max-[540px]:w-20 max-[540px]:rounded-md"
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onClick={(e) => {
              e.stopPropagation(), setIsSuggestionOpen(true);
            }}
          />
          {isSuggestionOpen && (
            <div className="flex flex-col absolute top-16 z-20 border border-stone-400 bg-white max-w-[250px] rounded-xl max-h-[400px] overflow-scroll ">
              {filteredData.map((data, i) => {
                return (
                  <SearchSuggestion
                    key={i}
                    data={data}
                    search={search}
                    setInput={setInput}
                    setIsSuggestionOpen={setIsSuggestionOpen}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Filter and Filter Functionality */}

        <div className="filter text-black">
          <select
            name=""
            id=""
            className="bg-white outline-none 
            text-sm px-1 w-[20vw] h-10 rounded-xl shadow-lg hover:cursor-pointer max-[540px]:rounded-md max-[540px]:h-7 max-[540px]:p-0"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">Select a category</option>
            {categories.map((category, i) => (
              <option key={i} value={`${category.slug}`}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Cart Icon */}

        <div className="cart text-xl flex  hover:cursor-pointer max-[540px]:text-sm">
          <Link to="/cart" className="flex gap-2">
            <LuShoppingCart />

            <span className="cart-count text-[13px] font-bold w-5 bg-blue-400 rounded-xl flex items-center justify-center max-[540px]:text-xs max-[540px]:w-4 max-[540px]:rounded-xl">
              {cartItemCount}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
