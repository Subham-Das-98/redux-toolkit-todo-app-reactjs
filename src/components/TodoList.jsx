import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, getTodoById, enableEdit, setCurrentTodo } from "../features/todo/todoSlice";
import { addAlertMessage } from "../features/alert/alertSlice"
import TodoItem from "./TodoItem";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  // no todo found
  if(!todos?.length) {
    return <div className="mt-14 mb-4 mx-auto w-max text-slate-600">No todo found</div>
  }

  // list todo
  return (
    <>
      <div className="w-full max-w-5xl border mt-14 mb-4 mx-auto px-2 rounded-lg bg-slate-950 border-slate-800 divide-y divide-slate-800">
        {todos && todos.map((todo, index) => (
          <li key={todo.id} id={todo.id} className="list-none">
            <TodoItem
              text={todo.text}
              index={index}
              editHandler={(e) => {
                e.preventDefault();
                dispatch(enableEdit());
                dispatch(setCurrentTodo(getTodoById(todos, todo.id)));
              }}
              deleteHandler={(e) => {
                e.preventDefault();
                dispatch(deleteTodo(todo.id));
                dispatch(addAlertMessage("Todo deleted successfully"));
              }}
            />
          </li>
        ))}
      </div>
    </>
  );
}

export default TodoList;
