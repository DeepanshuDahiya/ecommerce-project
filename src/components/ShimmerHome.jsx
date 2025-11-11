export default function ShimmerHome() {
  const array = [...Array(10)];

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      {array.map((e, i) => {
        return (
          <div key={i}>
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden flex flex-col w-[260px]">
              <div className="w-full h-60 bg-gray-100 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gray-300"></div>
              </div>
              <div className="flex flex-col justify-between grow p-4">
                <p className="bg-gray-300 h-3 rounded-lg mb-2"></p>
                <p className="bg-gray-300 h-3 rounded-lg mb-2"></p>
                <p className="bg-gray-300 h-3 rounded-lg mb-2"></p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
