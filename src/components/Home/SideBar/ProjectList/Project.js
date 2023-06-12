import React from "react";
import { useDispatch } from "react-redux";
import { getProjectSearch } from "../../../../features/TaskAPi/TaskSlice";


const Project = ({project}) => {
  const dispatch=useDispatch();
  const handleChecked=(e)=>{
    const projectCheck={
      toggle:e,
      projectName:project.projectName
    }
    dispatch(getProjectSearch(projectCheck))
  }
  return (
    <div className="checkbox-container">
      <input value={project.projectName} onChange={(e)=>handleChecked(e.target.checked)} type="checkbox" className={project.colorClass} />
      <p className="label">{project.projectName}</p>
    </div>
  );
};

export default Project;
