import Link from "next/link"

export default function ProjectLink({title, link, body}) {
  return (
    <div>
      <div className="project-link">
      <Link href={link}>
          <h1 className="head-text text-lg">{title}</h1>
          <p className="main-text text-sm leading-5 break-word">{body}</p>
      </Link>
      </div>
    </div>
  )
}
