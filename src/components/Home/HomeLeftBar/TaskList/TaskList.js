import React from "react";
import { useSelector } from "react-redux";
import { useGetTaskQuery } from "../../../../features/TaskAPi/TaskApi";
import Task from "./Task";
const TaskList = () => {
  const { data: tasksAPI, isError, isLoading, error } = useGetTaskQuery();
  const {tasks}=useSelector((state)=>state.tasks)||{tasks:[]};
  
   let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>An Error Occurred</div>;
  }
  if (!isError && !isLoading && tasksAPI?.length === 0&&tasks?.tasks?.length===0) {
    content = <div>No team Members Found</div>;
  }
  if (!isError && !isLoading && tasksAPI.length > 0&&tasks?.tasks?.length>0) {
    content = tasks?.tasks?.map((task) => (
      <Task key={task.id} task={task}></Task>
    ));
  }
  return <div class="lws-task-list">{content}</div>;
};

export default TaskList;
