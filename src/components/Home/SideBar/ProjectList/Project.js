import React from "react";

const Project = ({project}) => {
  return (
    <div className="checkbox-container">
      <input type="checkbox" className={project.colorClass} />
      <p className="label">{project.projectName}</p>
    </div>
  );
};

export default Project;
