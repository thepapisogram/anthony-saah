import NavIcons from "@/app/components/universal/Navbar/NavIcons"
import Logo from "@/app/components/universal/Logo"

export default function NavBar() {

  return (
    <div className="flex items-center py-2">
      <Logo  width={50} height={50} />
      <h1 className="dark:text-yellow-500 font-bold tracking-widest text-xl ml-1">APISO</h1>
      <NavIcons />
    </div>
  )
}
