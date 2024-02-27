import Link from "next/link";

export default function FooterDomains({domain}) {
  return (
    <div className="lg:mt-5 sm:mt-[12px] mt-2">
        <Link href="/" className="text-[#B6BDC4] md:text-sm text-xs">{domain}</Link>
    </div>
  )
}
