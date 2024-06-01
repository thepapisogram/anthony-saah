"use client"
import Link from "next/link"
import { useEffect } from "react"

export default function NavIcon({ link = "#", icon = "twitter", color = "black" }) {

  useEffect(() => {
    import('boxicons')
  })

  return (
    <Link className="flex items-center hover:animate-pulse" href={link} target="_blank">
        <box-icon type='logo' name={icon} color={color} size="sm"></box-icon>
    </Link>
  )
}
