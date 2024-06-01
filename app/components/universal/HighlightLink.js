import Link from "next/link"

export default function HighlightLink({ link = "#", text = "Link" }) {
  return (
    <Link className="p-1 head-text text-sm highlight-bg rounded-lg" href={link}>{text}</Link>
  )
}
