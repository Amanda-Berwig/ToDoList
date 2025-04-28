import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ data, onCheckTask, onUpdateTaskDescription, onRemoveTask }) => {
  if (data.length === 0) {
    return (
      <p className="text-center text-gray-500 py-4">
        Nenhuma tarefa disponível. Adicione sua primeira tarefa!
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {data.map((task) => (
        <TaskItem {...{ task, onCheckTask, onUpdateTaskDescription, onRemoveTask }} key={task.id} />
      ))}
    </ul>
  );
};

export default TaskList;
