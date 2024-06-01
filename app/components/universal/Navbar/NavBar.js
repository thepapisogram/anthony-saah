import NavIcons from "@/app/components/universal/Navbar/NavIcons"
import Logo from "@/app/components/universal/Logo"

export default function NavBar() {

  return (
    <div className="flex items-center py-4">
      <Logo />
      <NavIcons />
    </div>
  )
}
