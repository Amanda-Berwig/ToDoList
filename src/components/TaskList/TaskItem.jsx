import React, { useState } from "react";
import { useTheme } from "../Theme/ThemeContext";
import DeleteButton from "./DeleteButton";
import { Circle, CircleCheckBig } from "lucide-react";

const TaskItem = ({ task, onCheckTask, onUpdateTaskDescription, onRemoveTask }) => {
  const { theme } = useTheme();

  const [description, setDescription] = useState(null);

  const handleStartEdit = (item) => {
    setDescription(item.description);
  };

  const handleEdit = (event) => {
    if (event.key === "Enter") {
      onUpdateTaskDescription(task, event.target.value)
      setDescription(null);
    } else if (event.key === "Escape") {
      setDescription(null);
    }
  };

  const editModeEnabled = typeof description === 'string';

  return (
    <li
      onDoubleClick={() => handleStartEdit(task)}
      className={`relative p-4 rounded-lg ${theme === "light"
        ? " bg-gray-50  border-gray-100"
        : "bg-[#cad0d5] border-[#d7dbe0]"
        } shadow-sm border hover:shadow-md transition-shadow`}
    >
      {editModeEnabled ? (
        <div className="flex items-center justify-between">
          <input
            className="border px-2 py-1 rounded w-full "
            value={editModeEnabled ? description : task.description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={(e) => handleEdit(e)}
            autoFocus
          />
          <div className="flex gap-2"></div>
        </div>
      ) : (
        <div
          className="flex items-center gap-2"
          onClick={() => onCheckTask(task)}
        >
          {
            task.done
              ? <CircleCheckBig strokeWidth="1.5px" />
              : <Circle strokeWidth="1.5px" />
          }
          <span className={task.done ? "line-through text-gray-500" : "text-gray-800"}>
            {task.description}
          </span>
        </div>
      )}
      <DeleteButton onDelete={() => onRemoveTask(task)} />
    </li>
  )
};

export default TaskItem;
