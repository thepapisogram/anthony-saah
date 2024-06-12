import Image from "next/image";
import LanguageIcon from "./Sections/LanguageIcon";
import site_info from "@/site_info";

export default function ProfileWidget() {
  return (
    <div className="profile-widget">
        <div className="pw-box1">
        <div className="pw-box2">
        <div className="pw-box3">
        <div className="pw-box4">
        <div className="pw-imgbox">
            <Image src={site_info.components.ProfileWidget.image} className="pw-img" width={150} height={150} quality={100} alt="me" />
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="pw-content">
            <h1 className="pw-c-emoji">{site_info.components.ProfileWidget.emoji}</h1>
            <h1 className="pw-c-name">{site_info.components.ProfileWidget.name}</h1>
            <p className="pw-c-job">{site_info.components.ProfileWidget.job}</p>
            <p className="pw-c-extra">{site_info.components.ProfileWidget.extra}</p>
            <div className="pw-c-icons">
                <LanguageIcon icon="react" color="#0dcaf0" />
                <LanguageIcon icon="bootstrap" color="#563d7c" />
                <LanguageIcon icon="jquery" color="#0dcaf0" />
                <LanguageIcon icon="tailwind-css" color="#06b6d4" />
            </div>
        </div>
    </div>
  )
}
