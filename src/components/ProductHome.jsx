import { Link } from "react-router-dom";

export default function ProductHome({ data }) {
  return (
    <>
      <Link to={`/product/${data?.id}`} state={{ state: data }}>
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden flex flex-col w-[260px]">
          <div className="w-full h-60 bg-gray-100 flex items-center justify-center overflow-hidden">
            <img
              src={data?.thumbnail}
              alt={data?.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between grow p-4">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                {data?.brand}
              </p>
              <h3 className="text-base font-semibold text-gray-800 mt-1 line-clamp-1">
                {data?.title}
              </h3>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-lg font-bold text-emerald-600">
                ${data?.price}
              </p>
              <button className="text-sm text-white bg-emerald-500 px-3 py-1.5 rounded-lg hover:bg-emerald-600 cursor-pointer transition-colors">
                View
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
