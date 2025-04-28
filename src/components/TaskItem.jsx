import React from "react";

const TaskItem = ({ task }) => {
  const [modoEdição, setModoEdicao] = useState(false);
  const [textoEditando, setTextoEditando] = useState(""); // guarda o novo valor digitado
  const { theme } = useTheme();
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
    <li
      onDoubleClick={() => handleStartEdit(item)}
      className={`relative p-4 rounded-lg ${
        theme === "light"
          ? " bg-gray-50  border-gray-100"
          : "bg-[#cad0d5] border-[#d7dbe0]"
      } shadow-sm border hover:shadow-md transition-shadow`}
    >
      {modoEdição === item.id ? (
        <div className="flex items-center justify-between">
          <input
            className="border px-2 py-1 rounded w-full "
            value={textoEditando}
            onChange={(e) => setTextoEditando(e.target.value)}
            onKeyDown={(e) => handleEdit(e, item)}
            autoFocus
          />
          <div className="flex gap-2"></div>
        </div>
      ) : (
        <div
          className="flex items-center gap-2"
          onClick={() => toggleDone(item.id)}
        >
          {item.done ? (
            <CircleCheckBig strokeWidth="1.5px" />
          ) : (
            <Circle strokeWidth="1.5px" />
          )}
          <span
            className={
              item.done ? "line-through text-gray-500" : "text-gray-800"
            }
          >
            {item.task}
          </span>
        </div>
      )}
      <DeleteButton onDelete={() => deleteTask(item.id)} />
    </li>
  );
};

export default TaskItem;
