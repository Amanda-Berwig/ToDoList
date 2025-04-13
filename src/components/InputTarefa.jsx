function InputTarefa({ task, setTask }) {
  return (
    <>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
    </>
  );
}

export default InputTarefa;
