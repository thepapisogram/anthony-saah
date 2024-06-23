import AboutSection from "./components/Home/Sections/AboutSection";
import FeaturedSection from "./components/Home/Sections/FeaturedSection";
import HomeSection from "./components/Home/Sections/HomeSection";
import ProfileWidget from "./components/Home/ProfileWidget";
import ProjectSection from "./components/Home/Sections/ProjectSection";

export default function Home() {
  return(
    <main>
      <ProfileWidget />
      <div className="md:grid md:grid-cols-2 md:gap-x-2">
        <HomeSection icon="dumbbell" title="Projects" content={ProjectSection} />
        <HomeSection icon="book-bookmark" title="Featured" content={FeaturedSection} />
      </div>
      <HomeSection icon="info-circle" title="About Me" content={AboutSection} />
    </main>
  )
}