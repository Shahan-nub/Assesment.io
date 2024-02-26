
export default function MoreDetails({MoreDetailsRating,details}) {
  return (
    <div className="flex items-center my-1">
      <div className="bg-white rounded-md px-2 py-1 text-blue-600 mr-2">{MoreDetailsRating}</div>
      <div className="">{details}</div>
    </div>
  )
}
