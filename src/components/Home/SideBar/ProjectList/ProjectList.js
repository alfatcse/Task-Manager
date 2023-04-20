import React from "react";
import { useGetProjectsQuery } from "../../../../features/ProjectApi/ProjectApi";
import Project from "./Project";

const ProjectList = () => {
  const { data: projects, isError, isLoading, error } = useGetProjectsQuery();
  console.log(projects);
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>An Error Occurred</div>;
  }
  if(!isError&&!isLoading&&projects.length===0){
    content=<div>No Project Found</div>
  }
  if(!isError&&!isLoading&&projects.length>0){
    content=projects.map((project)=><Project key={project.id} project={project}></Project>)
  }
  return (
    <div>
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="mt-3 space-y-4">
       {content}
      </div>
    </div>
  );
};

export default ProjectList;
