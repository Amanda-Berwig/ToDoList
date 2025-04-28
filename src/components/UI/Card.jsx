import { useTheme } from "../Theme/ThemeContext";

const Card = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`max-w-md w-full rounded-xl shadow-lg p-6 ${theme === "light" ? "bg-[#FFFFFF]" : "bg-[#d7dbe0]"}`}
    >
      {children}
    </div>
  )
};

export default Card;