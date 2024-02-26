import { CiClock1 } from "react-icons/ci";


export default function TitleDetails({name,date}) {
  return (
    <div className="flex justify-between items-center">
      <CiClock1></CiClock1>
      <p className="text-[#4B5665] pl-2">{name}- {date}</p>
    </div>
  )
}
