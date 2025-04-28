import React from "react";
import { useTheme } from "./ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`w-16 h-8 flex items-center rounded-full px-1 transition-colors duration-400
    ${theme === "dark" ? "bg-gray-700" : "bg-[#00B4D8]"}`}
    >
      <div
        className={`w-6 h-6 flex items-center justify-center rounded-full shadow-md transform transition-transform duration-300
      ${
        theme === "dark"
          ? "translate-x-8 bg-white text-black"
          : "translate-x-0 bg-white text-black"
      }`}
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </div>
    </button>
  );
};

export default ThemeToggleButton;
