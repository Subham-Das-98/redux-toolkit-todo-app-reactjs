import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos:
    JSON.parse(localStorage.getItem("todos")) ||
    [
      // {
      // id: nanoid(),
      // text: "test todo description"
      // }
    ],
  isEditable: false,
  currentTodo: {},
};


export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload.todo : todo
      );
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    enableEdit: (state) => {
      state.isEditable = true;
    },
    disableEdit: (state) => {
      state.isEditable = false;
    }
  },
});

// individual reducers for app components
export const {
  addTodo,
  deleteTodo,
  updateTodo,
  setCurrentTodo,
  enableEdit,
  disableEdit
} = todoSlice.actions;

// bundle reducer for app store
export default todoSlice.reducer;

// selector function to get a specific todo by id
export const getTodoById = (todos, id) => {
  return todos.find((todo) => todo.id === id);
};
