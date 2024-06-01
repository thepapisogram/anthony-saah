"use client"
import { useState, useEffect } from "react"

export default function ThemeIcon({ icon, type = "regular", size = "sm" }) {
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

    return <box-icon type={type} name={icon} color={isDarkMode ? "#ca8a04" : "#15803d"} size={size}></box-icon>
}