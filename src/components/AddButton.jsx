import React from "react";
import { PlusCircle, AlertCircle } from "lucide-react";

function AddButton({ task, setTask, listTasks, setListTasks }) {
  const AddNewTask = () => {
    if (task.trim() === "") {
      alert("Digite uma tarefa!");
      return;
    }
    setListTasks([...listTasks, task]);
    setTask("");
  };

  return (
    <>
      <button
        onClick={AddNewTask}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
      >
        <PlusCircle size={18} />
        Adicionar
      </button>
    </>
  );
}

export default AddButton;
