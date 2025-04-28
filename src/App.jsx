import { useTheme } from "./components/Theme/ThemeContext";
import "./App.css";
import MainSection from "./components/MainSection";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import ThemeToggleButton from "./components/Theme/ThemeToggleButton";

function AppContent() {
  const { theme } = useTheme();

  const colorBg =
    theme === "dark"
      ? "bg-gradient-to-br from-[#284B63] to-[#6C757D] text-gray-900"
      : "bg-gradient-to-br from-[#90E0EF] to-[#CAF0F8] text-gray-900";

  return (
    <div
      className={`min-h-screen p-4 flex items-center transition-colors duration-500 justify-center ${colorBg}`}
    >
      <div className="absolute top-4 right-4">
        <ThemeToggleButton />
      </div>
      <MainSection />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
