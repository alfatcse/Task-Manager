import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  tasksD: [],
  projectSearch: [],
  p: [],
};

const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasks: (state, action) => {
      state.tasks = action.payload;
      state.tasksD = action.payload;
    },
    getProjectSearch: (state, action) => {
      if (action.payload.toggle === true) {
        state.tasks.tasks = [];
        state.projectSearch.push(action.payload.projectName);
        state.tasksD.tasks.map((i) =>
          state.projectSearch.map((f) => {
            if (f === i.project.projectName) {
              state.tasks.tasks.push(i);
            }
          })
        );
      }
      else if(action.payload.toggle === false){
        state.projectSearch=state.projectSearch.filter(function(item){
            return item!==action.payload.projectName
        })
        state.tasks.tasks = state.tasks.tasks.filter(function(item) {
            return item.project.projectName !== action.payload.projectName
        })
        if(state.tasks.tasks.length===0){
            state.tasks=state.tasksD;
        }
      }
    },
    sortTasksWithProjects: (state) => {
      const result = state.tasks.tasks.filter((i) =>
        state.projectSearch.every((f) => f === i.project.projectName)
      );
      console.log(result);
      state.p = result;
    },
  },
});
export const { getTasks, getProjectSearch, sortTasksWithProjects } =
  TaskSlice.actions;
export default TaskSlice.reducer;
