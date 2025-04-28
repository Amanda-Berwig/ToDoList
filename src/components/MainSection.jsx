import React from "react";
import TaskList from "./TaskList/TaskList";
import TaskInputField from "./TaskForm/TaskInputField";
import Card from "./UI/Card";
import { useTasks } from "../hooks/useTasks";

function MainSection() {
  const {
    taskList,
    handleAddTask,
    handleCheckTask,
    handleUpdateTaskDescription,
    handleRemoveTask,
  } = useTasks();

  return (
    <Card>
      <TaskInputField onAddTask={handleAddTask} />
      <TaskList
        data={taskList}
        onCheckTask={handleCheckTask}
        onRemoveTask={handleRemoveTask}
        onUpdateTaskDescription={handleUpdateTaskDescription}
      />
    </Card>
  );
}

export default MainSection;
