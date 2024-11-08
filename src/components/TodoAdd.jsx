import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  updateTodo,
  disableEdit,
  setCurrentTodo,
} from "../features/todo/todoSlice";
import { addAlertMessage } from "../features/alert/alertSlice";

function TodoAdd() {
  const [input, setInput] = useState("");
  const isEditable = useSelector((state) => state.todo.isEditable);
  const currentTodo = useSelector((state) => state.todo.currentTodo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTodo.text) {
      setInput(currentTodo.text);
    }
  }, [currentTodo]);

  function addTodoHandler(e) {
    e.preventDefault();
    if (!input || input.length === 0) return;
    dispatch(addTodo(input));
    dispatch(addAlertMessage("Todo added successfully"));
    setInput("");
  }

  function saveChangesHandler(e) {
    e.preventDefault();
    if (!input || input.length === 0 || !currentTodo) return;
    const newTodo = { ...currentTodo, text: input };
    dispatch(updateTodo({ id: currentTodo.id, todo: newTodo }));
    dispatch(disableEdit());
    dispatch(setCurrentTodo({}));
    dispatch(addAlertMessage("Todo updated successfully"));
    setInput("");
  }

  return (
    <>
      <div className="w-full max-w-2xl mx-auto mt-24 p-2">
        <form action="">
          <div>
            <input
              type="text"
              className="outline-none p-4 w-full block rounded-lg bg-slate-700"
              name="todo-input"
              id=""
              placeholder="Enter your todo here..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              autoComplete="off"
              data-todo-ref-id=""
            />
          </div>

          <div className="mt-4">
            {!isEditable && (
              <input
                type="submit"
                className="border block w-36 mx-auto py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 border-emerald-700 cursor-pointer transition"
                value="Add Todo"
                onClick={addTodoHandler}
                name="add-btn"
              />
            )}
            {isEditable && (
              <input
                type="submit"
                className="border block w-36 mx-auto py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 border-emerald-700 cursor-pointer transition"
                value="Save Changes"
                onClick={saveChangesHandler}
                name="save-btn"
              />
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default TodoAdd;
