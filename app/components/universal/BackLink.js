import Link from "next/link"
import ThemeIcon from "./ThemeIcon"

export default function BackLink({ text = "Home", link = "/"}) {
    return (
        <Link className="crumb" href={link}>
            <ThemeIcon icon="arrow-back" />
            {text}
        </Link>
    )
}
