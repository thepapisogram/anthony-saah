import HighlightLink from "@/app/components/universal/HighlightLink";
import HomeProjectList from "../../Projects/HomeProjectList";

export default function ProjectSection() {
  return (
    <div>
        <h1 className="main-text">There&apos;s just two projects on my portfolio. A calculator and a tic tac toe game</h1>
        <HomeProjectList />
        <p className="small sub-text mb-2">Tic Tac Toe Added</p>
        <HighlightLink link="/projects" text="View All" />
    </div>
  )
}
