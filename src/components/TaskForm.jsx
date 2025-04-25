import { useTheme } from "./ThemeContext";

function TaskForm({ task, setTask }) {
  const { theme } = useTheme();
  return (
    <>
      <input
        className={`px-4 w-2/3 py-2 border transition-all duration-300 border-gray-200 ${
          theme === "light" ? "focus:ring-[#00B4D8]" : "focus:ring-[#284B63]"
        } rounded-lg focus:outline-none  placeholder:text-gray-900 focus:ring-2 focus:border-transparent`}
        type="text"
        placeholder="Adicione uma tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
    </>
  );
}

export default TaskForm;
