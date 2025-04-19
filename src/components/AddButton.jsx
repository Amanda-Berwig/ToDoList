import React from "react";
import { PlusCircle } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

function AddButton({ task, setTask, listTasks, setListTasks }) {
  const AddNewTask = () => {
    if (task.trim() === "") {
      alert("Digite uma tarefa!");
      return;
    }
    setListTasks([...listTasks, { id: uuidv4(), task }]);
    setTask("");
  };

  return (
    <>
      <button
        onClick={AddNewTask}
        className="px-4 py-2  bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex text-center justify-center items-center gap-2"
      >
        <PlusCircle size={18} />
        Adicionar
      </button>
    </>
  );
}

export default AddButton;
