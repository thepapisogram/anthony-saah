import BackLink from "../components/universal/BackLink"
import ProjectLink from "../components/Projects/ProjectLink"

export default function page() {
  return (
    <div className="my-5">
      <BackLink link="/" text="Home" />
      <h1 className="text-xl main-text uppercase mb-2">Projects</h1>
      <p className="sub-text">After losing lots of code, I&apos;m starting over with my projects. Explore the new web applications I&apos;m building! From simple projects to large scale apps. Below are the projects I&apos;ve completed.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-2">
        <ProjectLink link="/projects/calculator" title="Calculator" body="One of the traditions. Of course I built a simple Calculator" />
      </div>
    </div>
  )
}
