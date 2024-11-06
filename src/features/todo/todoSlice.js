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
  alertMessages: [],
};

// helper function to get new alert object
function createAlertMessage(message) {
  return {
    id: nanoid(),
    message
  }
}

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
      state.alertMessages.push(createAlertMessage("Todo added successfully"));
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.alertMessages.push(createAlertMessage("Todo deleted successfully"));
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload.todo : todo
      );
      state.alertMessages.push(createAlertMessage("Todo updated successfully"));
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
    },
    setAlertMessage: (state, action) => {
      state.alertMessages.push(createAlertMessage(action.payload));
    },
    deleteAlertMessage: (state, action) => {
      state.alertMessages = state.alertMessages.filter(alertMessage => alertMessage.id !== action.payload);
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
  disableEdit,
  setAlertMessage,
  deleteAlertMessage
} = todoSlice.actions;

// bundle reducer for app store
export default todoSlice.reducer;

// selector function to get a specific todo by id
export const getTodoById = (todos, id) => {
  return todos.find((todo) => todo.id === id);
};
