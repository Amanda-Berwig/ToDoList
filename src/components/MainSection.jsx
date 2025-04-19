import React, { useState } from "react";
import InputTarefa from "./InputTarefa";
import AddButton from "./AddButton";
import EditButton from "./Editbutton/EditButton";

function MainSection() {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([]);
  const [modoEdição, setModoEdição] = useState(false);

  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
      <h1 className="text-center">Lista de Tarefas</h1>
      <div className="flex items-center gap-5 m-5">
        <InputTarefa task={task} setTask={setTask} />
        <AddButton
          task={task}
          setTask={setTask}
          listTasks={listTasks}
          setListTasks={setListTasks}
        />
      </div>

      <ul className="space-y-2 ">
        {listTasks.map((item) => (
          <li
            key={item.id}
            className="relative p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            {item.task}
            <EditButton
              listTasks={listTasks}
              setListTasks={setListTasks}
              modoEdição={modoEdição}
              setModoEdição={setModoEdição}
              setTask={setTask}
            />
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
