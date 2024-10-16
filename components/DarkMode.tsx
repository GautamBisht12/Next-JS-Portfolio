// components/ThemeToggle.js
"use client"
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    > 
      { theme === 'dark' ?  <FaSun size={22} color='yellow'/>  : <FaMoon size={22}/> }
    </button>
  );
}
