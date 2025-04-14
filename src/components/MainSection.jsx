import React, { useState } from "react";
import InputTarefa from "./InputTarefa";
import AddButton from "./AddButton";

function MainSection() {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([]);

  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
      <h1>Lista de Tarefas</h1>
      <InputTarefa task={task} setTask={setTask} />
      <AddButton
        task={task}
        setTask={setTask}
        listTasks={listTasks}
        setListTasks={setListTasks}
      />
      <ul>
        {listTasks.map((task, index) => (
          <li
            key={index}
            className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            {task}
          </li>
        ))}
      </ul>
      {listTasks.length === 0 && (
        <p className="text-center text-gray-500 py-4">
          Nenhuma tarefa disponível. Adicione sua primeira tarefa!
        </p>
      )}
    </div>
  );
}

export default MainSection;
