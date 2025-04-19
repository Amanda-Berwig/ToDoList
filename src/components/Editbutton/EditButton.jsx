import React from "react";
import { SquarePen } from "lucide-react";

function EditButton({ listTasks, setModoEdição, index, setTask }) {
  const EditTask = () => {
    const taskToEdit = listTasks[index];
    setModoEdição(true);
  };

  return (
    <div>
      <button
        onClick={EditTask}
        className="absolute right-12 top-3 hover:bg-gray-200 rounded-full p-1 transition-colors"
      >
        <SquarePen size={20} />
      </button>
    </div>
  );
}

export default EditButton;
