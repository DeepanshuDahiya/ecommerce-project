export default function ReviewCard({ review }) {
  return (
    <div>
      <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-5 max-w-md">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="font-semibold text-lg text-gray-800">
              {review.reviewerName}
            </p>
            <p className="text-sm text-gray-500">{review.reviewerEmail}</p>
          </div>
          <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
            <span className="text-yellow-500 font-bold mr-1">⭐</span>
            <span className="text-gray-800 font-medium">{review.rating}</span>
          </div>
        </div>

        <p className="text-gray-700 italic border-t border-gray-100 pt-3">
          “{review.comment}”
        </p>
      </div>
    </div>
  );
}
