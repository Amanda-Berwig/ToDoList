import React from "react";

function AddButton({ task, setTask, listTasks, setListTasks }) {
  const AddNewTask = () => {
    if (task.trim() === "") {
      alert("Digite uma tarefa!");
      return;
    }
    setListTasks([...listTasks, task]);
    setTask("");
  };

  return (
    <>
      <button onClick={AddNewTask}>Adicionar</button>
    </>
  );
}

export default AddButton;
