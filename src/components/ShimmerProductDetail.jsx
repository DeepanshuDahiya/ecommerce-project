export default function ShimmerProductDetail() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="p-4 rounded-2xl shadow-lg w-2/3 h-3/4 overflow-hidden flex">
        <div className="w-2/3 h-80 bg-gray-100">
          <div className="h-full bg-gray-300 rounded-md"></div>
        </div>
        <div className="flex flex-col w-full justify-between p-4">
          <p className="bg-gray-300 h-4 w-[80%] rounded-lg"></p>
          <p className="bg-gray-300 h-4 w-[80%] rounded-lg"></p>
          <p className="bg-gray-300 h-4 w-[80%] rounded-lg"></p>
          <p className="bg-gray-300 h-4 w-[80%] rounded-lg"></p>
          <p className="bg-gray-300 h-4 w-[80%] rounded-lg"></p>
          <p className="bg-gray-300 h-4 w-[80%] rounded-lg"></p>
        </div>
      </div>
    </div>
  );
}
