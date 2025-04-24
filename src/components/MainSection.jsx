import React, { useState } from "react";
import InputTarefa from "./InputTarefa";
import AddButton from "./AddButton";

function MainSection() {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([]);
  const [modoEdição, setModoEdicao] = useState(false);
  const [textoEditando, setTextoEditando] = useState(""); // guarda o novo valor digitado

  const handleStartEdit = (item) => {
    setModoEdicao(item.id);
    setTextoEditando(item.task); // pré-preenche o input com o valor atual
  };

  const handleEdit = (event, item) => {
    if (event.key === "Enter") {
      const novaLista = listTasks.map((tarefa) =>
        tarefa.id === item.id ? { ...tarefa, task: textoEditando } : tarefa
      );
      setListTasks(novaLista);
      setModoEdicao(null);
    } else if (event.key === "Escape") {
      setModoEdicao(null); // cancela edição
    }
  };

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
            onDoubleClick={() => handleStartEdit(item)}
            className="relative p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            {modoEdição === item.id ? (
              <div className="flex items-center justify-between">
                <input
                  className="border px-2 py-1 rounded w-full mr-2"
                  value={textoEditando}
                  onChange={(e) => setTextoEditando(e.target.value)}
                  onKeyDown={(e) => handleEdit(e, item)}
                  autoFocus
                />
                <div className="flex gap-2"></div>
              </div>
            ) : (
              <span>{item.task}</span>
            )}
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
