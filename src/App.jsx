import "./App.css";
import MainSection from "./components/MainSection";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 flex items-center justify-center dark:bg-blue-950">
        <ThemeToggleButton />
        <MainSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
