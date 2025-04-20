import React, { useState } from "react";
import { SquareCheck } from "lucide-react";
import { SquareX } from "lucide-react";

import InputTarefa from "./InputTarefa";
import AddButton from "./AddButton";
import EditButton from "./Editbutton/EditButton";

function MainSection() {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([]);
  const [modoEdição, setModoEdição] = useState(false);
  const [textoEditando, setTextoEditando] = useState(""); // guarda o novo valor digitado

  // Função para iniciar a edição de uma tarefa
  const iniciarEdicao = (id, textoAtual) => {
    setModoEdição(id);
    setTextoEditando(textoAtual);
  };

  // Função para salvar a edição de uma tarefa
  const salvarEdicao = () => {
    if (textoEditando.trim() === "") {
      alert("A tarefa não pode estar vazia!");
      return;
    }

    // Atualiza a lista de tarefas com o novo texto
    const novaLista = listTasks.map((item) =>
      item.id === modoEdição ? { ...item, task: textoEditando } : item
    );

    setListTasks(novaLista);
    setModoEdição(false);
    setTextoEditando("");
  };

  // Função para cancelar a edição
  const cancelarEdicao = () => {
    setModoEdição(false);
    setTextoEditando("");
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
            className="relative p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            {modoEdição === item.id ? (
              <div className="flex items-center justify-between">
                <input
                  className="border px-2 py-1 rounded w-full mr-2"
                  value={textoEditando}
                  onChange={(e) => setTextoEditando(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      salvarEdicao();
                    } else if (e.key === "Escape") {
                      cancelarEdicao();
                    }
                  }}
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={salvarEdicao}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-400"
                  >
                    <SquareCheck />
                  </button>
                  <button
                    onClick={cancelarEdicao}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-400"
                  >
                    <SquareX />
                  </button>
                </div>
              </div>
            ) : (
              <>
                {item.task}
                <EditButton
                  id={item.id}
                  task={item.task}
                  listTasks={listTasks}
                  setListTasks={setListTasks}
                  modoEdição={modoEdição}
                  setModoEdição={setModoEdição}
                  iniciarEdicao={() => iniciarEdicao(item.id, item.task)}
                />
              </>
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
