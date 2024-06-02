import NavIcons from "@/app/components/universal/Navbar/NavIcons"
import Logo from "@/app/components/universal/Logo"
import Link from "next/link"

export default function NavBar() {

  return (
    <div className="flex items-center py-4">
      <Link href="/"><Logo /></Link>
      <NavIcons />
    </div>
  )
}
