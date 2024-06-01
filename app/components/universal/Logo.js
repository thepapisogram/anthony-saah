import Image from "next/image"

export default function Logo({ width = 50, height = 50}) {
  return (
    <Image src="/logo.png" width={width} height={height} alt="logo" />
  )
}
