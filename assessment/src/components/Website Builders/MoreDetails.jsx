
export default function MoreDetails({MoreDetailsRating,details}) {
  return (
    <div className="flex items-center lg:my-1 my-[3px]">
      <div className="bg-white rounded-md px-2 py-1 lg:text-base sm:text-sm text-xs text-blue-600 mr-2">{MoreDetailsRating}</div>
      <div className="lg:text-base sm:text-sm text-xs">{details}</div>
    </div>
  )
}
