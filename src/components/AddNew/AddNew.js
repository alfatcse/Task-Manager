import React, { useState } from "react";
import { useGetProjectsQuery } from "../../features/ProjectApi/ProjectApi";
import { useAddTaskMutation } from "../../features/TaskAPi/TaskApi";
import { useGetTeamQuery } from "../../features/TeamApi/TeamApi";

const AddNew = () => {
  const { data: projects, isError, isLoading, error } = useGetProjectsQuery();
  const [addTask,{isSuccess}]=useAddTaskMutation();
  const {
    data: team,
    isError: isErrorT,
    isLoading: isLoadingT,
    error: errorT,
  } = useGetTeamQuery();
  const OptionsP = projects?.map((p) => {
    return <option value={p.projectName}>{p.projectName}</option>;
  });
  const OptionsT = team?.map((t) => {
    return <option value={t.name}>{t.name}</option>;
  });
  const [taskName, setTaskName] = useState("");
  const [member, setMember] = useState('');
  const [projectName, setProjectName] = useState('');
  const [deadline, setDeadline] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const teamMember=team.find((t)=>t.name===member)
    const project=projects.find((t)=>t.projectName===projectName)
    addTask({
      taskName,
      teamMember,
      project,
      deadline
    })
  };
  return (
    <div className="container relative">
      <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
          Create Task for Your Team
        </h1>

        <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="fieldContainer">
              <label for="lws-taskName">Task Name</label>
              <input
                type="text"
                name="taskName"
                id="lws-taskName"
                required
                placeholder="Implement RTK Query"
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>

            <div className="fieldContainer">
              <label>Assign To</label>
              <select
                onChange={(e) => setMember(e.target.value)}
                name="teamMember"
                id="lws-teamMember"
                required
              >
                <option value="" hidden selected>
                  Select Member
                </option>
                {OptionsT}
              </select>
            </div>
            <div className="fieldContainer">
              <label for="lws-projectName">Project Name</label>
              <select
                onChange={(e) => setProjectName(e.target.value)}
                id="lws-projectName"
                name="projectName"
                required
              >
                <option value="" hidden selected>
                  Select Project
                </option>
                {OptionsP}
              </select>
            </div>

            <div className="fieldContainer">
              <label for="lws-deadline">Deadline</label>
              <input
                onChange={(e) => setDeadline(e.target.value)}
                type="date"
                name="deadline"
                id="lws-deadline"
                required
              />
            </div>

            <div className="text-right">
              <button type="submit" className="lws-submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddNew;
