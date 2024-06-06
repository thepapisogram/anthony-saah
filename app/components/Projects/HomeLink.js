import Link from "next/link"
import ThemeIcon from "../universal/ThemeIcon"

export default function HomeLink() {
  return (
    <Link className="flex items-center gap-2 text-center head-text font-thin tracking-wide" href="/projects">
        <ThemeIcon icon="arrow-back" />
        Go back to Projects
    </Link>
  )
}
