import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ taskList }) => {
  if (taskList.length === 0)
    return (
      <p className="text-center text-gray-500 py-4">
        Nenhuma tarefa disponível. Adicione sua primeira tarefa!
      </p>
    );
  return (
    <ul className="space-y-2 ">
      {taskList.map((item) => (
        <TaskItem task={item} key={item.id} />
      ))}
    </ul>
  );
  //   return (
  //     <div>
  //       <ul className="space-y-2 ">
  //         {listTasks.map((item) => (
  //
  //         ))}
  //       </ul>
  //     </div>
  //   );
};

export default TaskList;
