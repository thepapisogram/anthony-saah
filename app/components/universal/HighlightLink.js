import Link from "next/link"

export default function HighlightLink({ link = "#", text = "Link" }) {
  return (
    <Link className="highlight-btn" href={link}>{text}</Link>
  )
}
