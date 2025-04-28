import { useState } from "react";

export const useTasks = (initialState = []) => {
  const [taskList, setTaskList] = useState(initialState);
  
  const handleAddTask = (description) => {
    setTaskList([...taskList, { id: Date.now(), description, done: false }]);
  }

  const handleCheckTask = (taskToToggle) => {
    setTaskList(taskList.map(
      (existingTask) => existingTask.id === taskToToggle.id
        ? ({ ...taskToToggle, done: !taskToToggle.done })
        : existingTask
      )
    )
  }

  const handleUpdateTaskDescription = (taskToUpdate, description) => {
    setTaskList(taskList.map(
      (existingTask) => existingTask.id === taskToUpdate.id
        ? ({ ...existingTask, description })
        : existingTask
      )
    )
  }

  const handleRemoveTask = (taskToRemove) => {
    setTaskList(taskList.filter((existingTask) => existingTask !== taskToRemove))
  }

  return {
    taskList,
    handleAddTask,
    handleCheckTask,
    handleUpdateTaskDescription,
    handleRemoveTask,
  };
}
