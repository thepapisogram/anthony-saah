import Link from "next/link"
import ThemeIcon from "./ThemeIcon"

export default function HomeLink() {
    return (
        <Link className="flex items-center gap-2 text-center head-text font-thin tracking-wide mb-2" href="/projects">
            <ThemeIcon icon="arrow-back" />
            Go Home
        </Link>
    )
}
