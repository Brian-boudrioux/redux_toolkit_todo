import {createSlice} from "@reduxjs/toolkit";

const tasks = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
            return state;
        },
        removeTask: (state, action) => {
            return state.filter((task) => task.id != action.payload)
        }
    }
});

export const {addTask, removeTask} = tasks.actions;

export default tasks.reducer;