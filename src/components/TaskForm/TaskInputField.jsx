import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { useTheme } from "../Theme/ThemeContext";

function TaskInputField({ onAddTask }) {
  const { theme } = useTheme();

  const [description, seDescription] = useState("");

  const handleAddTask = () => {
    if (description.trim() === "") {
      alert("Digite uma tarefa!");
      return;
    }
    onAddTask(description);
    seDescription("");
  }

  return (
    <div className="flex gap-2">
      <input
        className={`px-4 w-2/3 py-2 border transition-all duration-300 border-gray-200 ${theme === "light" ? "focus:ring-[#00B4D8]" : "focus:ring-[#284B63]"
          } rounded-lg focus:outline-none  placeholder:text-gray-900 focus:ring-2 focus:border-transparent`}
        type="text"
        placeholder="Adicione uma tarefa"
        value={description}
        onChange={(e) => seDescription(e.target.value)}
      />
      <button
        onClick={handleAddTask}
        className={`px-4 py-2 text-white rounded-lg transition-colors flex text-center justify-center items-center gap-2  ${theme === "light"
          ? "bg-[#00B4D8] hover:bg-[#82d6e7]"
          : "bg-[#284B63] hover:bg-[#577588]"
          }`}
      >
        <PlusCircle size={18} />
        Adicionar
      </button>
    </div>
  );
}

export default TaskInputField;
