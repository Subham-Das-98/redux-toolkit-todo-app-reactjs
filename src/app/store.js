import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice.js";
import alertReducer from "../features/alert/alertSlice.js"

const store = configureStore({
  reducer: {
    todo: todoReducer,
    alert: alertReducer
  },
});

export default store;
