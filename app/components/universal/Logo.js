"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import site_info from "@/site_info";

export default function Logo({ width = 120, height = 120}) {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleColorSchemeChange = (e) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleColorSchemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleColorSchemeChange);
    };

  }, []);

  return (
    <Image className="w-auto h-auto" src={isDarkMode ? site_info.logo.navbar.dark : site_info.logo.navbar.light} width={width} height={height} alt="logo" />
  )
}