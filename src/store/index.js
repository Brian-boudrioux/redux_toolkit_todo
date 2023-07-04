import { configureStore } from "@reduxjs/toolkit";
import tasks from "./tasks";

export default configureStore({
    reducer: {tasks}
});