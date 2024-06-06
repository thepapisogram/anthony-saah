import Link from "next/link"

export default function ProjectLink({title, link, body}) {
  return (
    <Link href={link} className="project-link p-2 rounded-lg my-2 cursor-pointer">
        <h1 className="main-text text-lg">{title}</h1>
        <p className="sub-text leading-5">{body}</p>
    </Link>
  )
}
