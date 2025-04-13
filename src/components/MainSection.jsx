import React, { useState } from "react";
import InputTarefa from "./InputTarefa";
import AddButton from "./AddButton";

function MainSection() {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([]);

  return (
    <div>
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
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default MainSection;
