import React, { useState } from "react";
import { Circle, CircleCheckBig } from "lucide-react";
import TaskForm from "./TaskForm";
import AddButton from "./AddButton";
import { useTheme } from "./ThemeContext";
import DeleteButton from "./DeleteButton";
import TaskList from "./TaskList";

const demoTasks = [{ id: "string1", task: "implementar lista", done: false }];

function MainSection() {
  const [taskList, setTaskList] = useState(demoTasks);
  const { theme } = useTheme();
  return (
    <div
      className={`max-w-md w-full rounded-xl shadow-lg p-6 ${
        theme === "light" ? "bg-[#FFFFFF]" : "bg-[#d7dbe0]"
      }`}
    >
      <h1 className="text-center font-bold">Lista de Tarefas</h1>
      <TaskList taskList={taskList} />
      {/* <div className="flex items-center gap-5 m-5">

      </div> */}
    </div>
  );
}

export default MainSection;
