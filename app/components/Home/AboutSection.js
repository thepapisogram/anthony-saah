import site_info from "@/site_info";
import HighlightLink from "../universal/HighlightLink";

export default function AboutSection() {
    return (
        <div>
            <p className="sub-text">I&apos;m Anthony Saah, a {site_info.general.age}-year-old Computer Science student 
                at the <HighlightLink link={site_info.about.uni.link} text={site_info.about.uni.name} />. 
            I&apos;m deeply passionate about technology and its potential 
            to transform lives. My journey into the world of computer science has been exhilarating, filled with 
            endless opportunities to learn and grow.</p>
        </div>
  )
}
