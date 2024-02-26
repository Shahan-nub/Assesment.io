import Link from "next/link"


export default function ToolItem({toolName}) {
  return (
    <div className="font-light cursor-pointer text-[#4B5665] hover:text-[#132846] lg:mx-20 md:mx-16 sm:mx-12 mx-8">
      <Link href="/">{toolName}</Link>
    </div>
  )
}
