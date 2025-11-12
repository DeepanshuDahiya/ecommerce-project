import { useNavigate, useLocation, useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { useEffect, useState } from "react";
import ShimmerProductDetail from "../components/ShimmerProductDetail";

export default function ProductDetail({ setCartItems }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location.state || {};
  const [fetchedProduct, setFetchedProduct] = useState([]);
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    if (!state) {
      fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => setFetchedProduct(data))
        .catch((error) => console.log(error));
    }
  }, []);

  function handleSetCart(product) {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    }),
      navigate("/cart");
  }
  let product = state ? state : fetchedProduct;
  return !product ? (
    <div className="mt-10">
      <ShimmerProductDetail />
    </div>
  ) : (
    <>
      <div className="min-h-screen p-8 flex flex-col items-center">
        <div className="max-w-5xl w-full border border-gray-300 flex flex-wrap gap-10 bg-white rounded-2xl shadow-lg p-8 max-[680px]:flex-col">
          <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden ">
            <img
              src={product.image || product.thumbnail}
              alt={product.title}
              className="w-full max-h-[300px] object-contain"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                {product.brand}
              </p>
              <h1 className="text-2xl font-bold text-gray-800 mt-2">
                {product.title}
              </h1>
              <p className="text-gray-600 mt-4 leading-relaxed">
                {product.description}
              </p>

              {product.rating && (
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                    <span className="text-yellow-500 font-bold mr-1">⭐</span>
                    <span className="text-gray-800 font-medium">
                      {product.rating}
                    </span>
                  </div>
                  {product.stock ? (
                    <p className="text-sm text-gray-500">
                      ({product.stock} in stock)
                    </p>
                  ) : (
                    <p className="text-sm text-gray-500">(Not in stock)</p>
                  )}
                </div>
              )}
            </div>
            <div className="text-sm text-gray-500">
              <p className="mb-1.5">
                <span className="font-bold">Warranty:</span>{" "}
                {product.warrantyInformation}
              </p>
              <p className="mb-1.5">
                <span className="font-bold">Shipping Details:</span>{" "}
                {product.shippingInformation}
              </p>
              <p>
                <span className="font-bold">Return Policy:</span>{" "}
                {product.returnPolicy}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-2xl font-bold text-emerald-600 max-[400px]:text:sm">
                ${product.price}
              </p>
              {product.stock ? (
                <button
                  className="px-5 py-2 text-sm bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 cursor-pointer max-[400px]:text-xs"
                  onClick={(e) => handleSetCart(product)}
                >
                  Add to Cart
                </button>
              ) : (
                <button className="px-5 py-2 text-sm bg-amber-600 text-white rounded-lg  ">
                  Not in Stock
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-bold text-2xl mb-4 flex">
            <span className="mx-auto">Reviews</span>
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {product?.reviews?.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
