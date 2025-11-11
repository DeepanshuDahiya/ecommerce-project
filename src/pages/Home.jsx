import { useEffect, useState } from "react";
import ProductHome from "../components/ProductHome";
import ShimmerHome from "../components/ShimmerHome";

export default function Home({
  search,
  filter,
  dataList,
  setDataList,
  filteredData,
  setFilteredData,
  setIsSuggestionOpen,
}) {
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const pageNumArray = [...Array(totalPages).keys()];
  let startSlice = (pageNumber - 1) * pageSize;
  let endSlice = startSlice + pageSize;

  // setting filtered data into filteredData
  // controller used to cancel any ongoing request if input of search changes for the new request
  // Abort controller prevents race condition

  useEffect(() => {
    const controller = new AbortController();
    const query = search.trim();

    async function fetchData() {
      try {
        if (query.length) {
          const res = await fetch(
            `https://dummyjson.com/products/search?q=${query}`,
            { signal: controller.signal }
          );
          const data = await res.json();
          setFilteredData(data.products);
        } else if (filter.length) {
          const res = await fetch(
            `https://dummyjson.com/products/category/${filter}`,
            { signal: controller.signal }
          );
          const data = await res.json();
          setFilteredData(data.products);
        } else {
          // No search and no filter
          setFilteredData(dataList);
        }
        setPageNumber(1);
      } catch (err) {
        if (err.name === "AbortError") return; // ignore aborted requests
        console.error("Fetch error:", err);
      }
    }

    fetchData();

    return () => controller.abort(); // cleanup: cancel old fetch
  }, [search, filter, dataList]);

  // Fetching Data

  useEffect(() => {
    if (!dataList.length) {
      fetch("https://dummyjson.com/products?limit=0")
        .then((res) => res.json())
        .then((data) => {
          setDataList(data.products.toReversed());
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return !dataList.length ? (
    <ShimmerHome />
  ) : (
    <div onClick={(e) => setIsSuggestionOpen(false)}>
      <div className="flex flex-wrap justify-center gap-8 p-8  min-h-screen">
        {filteredData.slice(startSlice, endSlice).map((data) => {
          return (
            <ProductHome
              key={data.id}
              id={data.id}
              image={data.thumbnail}
              title={data.title}
              brand={data.brand}
              price={data.price}
              data={data}
            />
          );
        })}
      </div>
      <div className="flex justify-center flex-wrap mb-5 mx-3">
        {pageNumArray.map((num, i) => (
          <button
            key={i}
            className="m-1.5 border w-6 flex justify-center items-center cursor-pointer"
            onClick={(e) => {
              setPageNumber(e.target.innerText), window.scroll(0, 0);
            }}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
