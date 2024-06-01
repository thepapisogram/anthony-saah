import NavIcon from "./NavIcon"

export default function NavIcons() {
    return (
        <div className="flex items-center gap-x-2 ml-auto bg-zinc-200 dark:bg-neutral-800 p-1 px-2 rounded-lg">
            {/* <NavIcon icon="instagram" link="https://www.instagram.com/thepapisogram" color="#fd1d1d" /> */}
            <NavIcon icon="twitter" link="https://x.com/thepapisogram" color="#1da1f2" />
            <NavIcon icon="gmail" link="mailto:thepapisogram@gmail.com" color="#ff4343" />
            <NavIcon icon="github" link="https://github.com/thepapisogram" color="#555" />
        </div>
    )
}
