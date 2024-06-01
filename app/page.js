import AboutSection from "./components/Home/AboutSection";
import FeaturedSection from "./components/Home/FeaturedSection";
import HomeSection from "./components/Home/HomeSection";
import PictureLanguage from "./components/Home/PictureLanguage";
import ProjectSection from "./components/Home/ProjectSection";

export default function Home() {
  return(
    <main>
      <PictureLanguage />
      <HomeSection icon="dumbbell" title="Projects" content={ProjectSection} />
      <HomeSection icon="book-bookmark" title="Featured" content={FeaturedSection} />
      <HomeSection icon="info-circle" title="About Me" content={AboutSection} />
    </main>
  )
}