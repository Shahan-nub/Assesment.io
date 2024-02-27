import Link from "next/link"


export default function ToolItem({toolName}) {
  return (
    <div className="font-light cursor-pointer text-[#4B5665] text-xs lg:text-sm hover:text-[#132846] lg:mx-20 md:mx-14 sm:mx-6 mx-[10px]">
      <Link href="/">{toolName}</Link>
    </div>
  )
}
