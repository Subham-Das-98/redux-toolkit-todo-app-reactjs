import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  getTodoById,
  enableEdit,
  setCurrentTodo,
  completeTodo,
  inCompleteTodo,
} from "../features/todo/todoSlice";
import { addAlertMessage } from "../features/alert/alertSlice";
import TodoItem from "./TodoItem";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completeTodos = todos.filter((todo) => todo.completed);

  // handler functions
  const editHandler = (id) => {
    dispatch(enableEdit());
    dispatch(setCurrentTodo(getTodoById(todos, id)));
  };

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
    dispatch(addAlertMessage("Todo deleted successfully"));
  };

  const completionHandler = (id, check = false) => {
    if (check) {
      dispatch(completeTodo(id));
      dispatch(addAlertMessage("Todo completed"));
    } else {
      dispatch(inCompleteTodo(id));
    }
  };

  // no todo found
  if (!todos?.length) {
    return (
      <div className="mt-14 mb-4 mx-auto w-max text-slate-600">
        No todo found
      </div>
    );
  }

  // list todo
  return (
    <>
      <div className="divide-y divide-slate-800 mt-14 mb-4">
        {/* incomplete todos */}
        <div className="mb-8">
          <div className="w-full max-w-5xl mx-auto">
            {incompleteTodos.length === 0 && (
              <span className="text-slate-600 text-center w-full block">
                No in-complete todo found
              </span>
            )}
          </div>

          <div
            className={`w-full max-w-5xl mx-auto px-2 rounded-lg bg-slate-950 ${
              incompleteTodos?.length > 0
                ? "border border-slate-800 divide-y divide-slate-800"
                : null
            }`}
          >
            {incompleteTodos?.map((todo, index) => (
              <li key={todo.id} className="list-none">
                <TodoItem
                  text={todo.text}
                  id={todo.id}
                  index={index}
                  completed={todo.completed}
                  editHandler={() => {
                    editHandler(todo.id);
                  }}
                  deleteHandler={() => {
                    deleteHandler(todo.id);
                  }}
                  completionHandler={() => {
                    completionHandler(todo.id, true);
                  }}
                />
              </li>
            ))}
          </div>
        </div>

        {/* completed todos  */}
        <div>
          <div className="w-full max-w-5xl  mt-8 mb-4 mx-auto">
            <span className="text-slate-600 text-center w-full block">
              {(completeTodos.length === 0) && ("No completed todo found")}
              {(completeTodos.length === 1) && ("Completed todo")}
              {(completeTodos.length > 1) && ("Completed todos")}
            </span>
          </div>

          <div
            className={`w-full max-w-5xl  mt-4 mb-4 mx-auto px-2 rounded-lg bg-slate-950 ${
              completeTodos?.length > 0
                ? "border border-slate-800 divide-y divide-slate-800"
                : null
            }`}
          >
            {completeTodos?.map((todo, index) => (
              <li key={todo.id} className="list-none">
                <TodoItem
                  text={todo.text}
                  index={index}
                  completed={todo.completed}
                  editHandler={() => {
                    editHandler(todo.id);
                  }}
                  deleteHandler={() => {
                    deleteHandler(todo.id);
                  }}
                  completionHandler={() => {
                    completionHandler(todo.id, false);
                  }}
                />
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
