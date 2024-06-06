import Link from "next/link"

export default function page() {
  return (
    <div className="my-5">
      <h1 className="text-xl main-text uppercase">Projects</h1>
      <p className="sub-text">After losing lots of code, I&apos;m starting over with my projects. Explore the new web applications I&apos;m building! From simple projects to large scale apps. Below are the projects I&apos;ve completed.</p>
      <div className="grid md:grid-cols-2 mt-5 gap-2">
        <Link href="/projects/calculator" className="highlight-btn p-2 rounded-lg my-2 cursor-pointer">
          <h1 className="head-text">Calculator</h1>
          <p className="sub-text">It&apos;s one of the basic projects when learning JS..Ofc I&apos;d build one</p>
        </Link>
      </div>
    </div>
  )
}
