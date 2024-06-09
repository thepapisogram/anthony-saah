import Link from "next/link"

export default function ProjectLink({title, link, body}) {
  return (
    <Link href={link} className="project-link p-2 rounded-lg my-2 cursor-pointer">
        <h1 className="head-text text-lg">{title}</h1>
        <p className="main-text text-sm leading-5">{body}</p>
    </Link>
  )
}
