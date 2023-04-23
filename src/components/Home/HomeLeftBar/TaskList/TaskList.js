import React from "react";
import { useGetTaskQuery } from "../../../../features/TaskAPi/TaskApi";
import ferdews from "../../../../images/avatars/ferdous.png";
import Task from "./Task";
const TaskList = () => {
  const { data: tasks, isError, isLoading, error } = useGetTaskQuery();
  console.log(tasks);
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>An Error Occurred</div>;
  }
  if (!isError && !isLoading && tasks.length === 0) {
    content = <div>No team Members Found</div>;
  }
  if (!isError && !isLoading && tasks.length > 0) {
    content = tasks.map((task) => (
      <Task key={task.id} task={task}></Task>
    ));
  }
  return <div class="lws-task-list">{content}</div>;
};

export default TaskList;
