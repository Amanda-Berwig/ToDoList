function InputTarefa({ task, setTask }) {
  return (
    <>
      <input
        className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="text"
        placeholder="Adicione uma tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
    </>
  );
}

export default InputTarefa;
