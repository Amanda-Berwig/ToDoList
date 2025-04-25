import React from "react";
import { PlusCircle } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "./ThemeContext";

function AddButton({ task, setTask, listTasks, setListTasks }) {
  const { theme } = useTheme();
  const AddNewTask = () => {
    if (task.trim() === "") {
      alert("Digite uma tarefa!");
      return;
    }
    setListTasks([...listTasks, { id: uuidv4(), task, done: false }]);
    setTask("");
  };

  return (
    <>
      <button
        onClick={AddNewTask}
        className={`px-4 py-2 text-white rounded-lg transition-colors flex text-center justify-center items-center gap-2  ${
          theme === "light"
            ? "bg-[#00B4D8] hover:bg-[#82d6e7]"
            : "bg-[#284B63] hover:bg-[#577588]"
        }`}
      >
        <PlusCircle size={18} />
        Adicionar
      </button>
    </>
  );
}

export default AddButton;
