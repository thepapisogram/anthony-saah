import Image from "next/image";
import LanguageIcon from "./Sections/LanguageIcon";

export default function PictureLanguage() {
  return (
    <div className="grid md:grid-cols-2 overflow-hidden py-5 md:py-0">
        <div className="p-2 md:p-10 transition-all">
        <div className="bg-red-600 rounded-3xl drop-shadow-sm">
        <div className="bg-yellow-400 rounded-3xl drop-shadow-sm rotate-[9deg]">
        <div className="bg-green-600 rounded-3xl drop-shadow-sm -rotate-[18deg]">
        <div className="bg-stone-800 rounded-3xl py-4 shadow-lg rotate-[9deg]">
            <Image src="/assets/profile/1.jpg" className="rounded-full mx-auto w-44 h-44 object-bottom object-cover" width={150} height={150} quality={100} alt="me" />
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="flex justify-center flex-col">
            <h1 className="text-center text-3xl">👋🏾</h1>
            <h1 className="text-center dark:text-yellow-500 tracking-wide text-3xl">I&apos;m Anthony</h1>
            <p className="text-center dark:text-neutral-500 tracking-widest">A Front-End Web Developer</p>
            <p className="md:hidden text-center dark:text-neutral-500 tracking-wide mt-3">Explore my portfolio to discover more about me and my passion for crafting exceptional digital experiences</p>
            <div className="hidden md:grid grid-cols-2 py-2 md:p-0 md:grid-cols-3 lg:grid-cols-4">
                <LanguageIcon icon="react" color="#0dcaf0" />
                <LanguageIcon icon="bootstrap" color="#563d7c" />
                <LanguageIcon icon="jquery" color="#0dcaf0" />
                <LanguageIcon icon="tailwind-css" color="#06b6d4" />
            </div>
        </div>
    </div>
  )
}
