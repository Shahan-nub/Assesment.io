import { FaRegCircleCheck } from "react-icons/fa6";

export default function WhyWeLoveIt({whyLove}) {
  return (
    <div className="flex items-center lg:text-base sm:text-sm text-xs">
        <FaRegCircleCheck className="mr-2 text-blue-600  rounded-full bg-blue-100"></FaRegCircleCheck>
         {whyLove}
    </div>
  )
}
