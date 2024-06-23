import ProjectLink from "./ProjectLink"

export default function HomeProjectList() {
  return (
      <div className="md:grid md:grid-cols-2 md:gap-x-2 mb-0.5">
          <ProjectLink title="Tic Tac Toe" body="Simple Tic Tac Toe Game" />
          <ProjectLink title="Calculator" body="A basic calculator" />
      </div>
  )
}
