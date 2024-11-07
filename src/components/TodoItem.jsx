import React, { useEffect, useState } from "react";

function TodoItem({
  text,
  index,
  completed,
  editHandler,
  deleteHandler,
  completionHandler,
}) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      completionHandler();
    }
  }, [checked]);

  return (
    <>
      <div className="flex gap-2 items-center py-2">
        <span className="ml-2">{`${index + 1}.`}</span>
        <div className="flex-grow">
          <input
            type="text"
            className={`outline-none bg-transparent px-2 w-full ${
              completed ? "line-through text-slate-600" : "text-base"
            }`}
            value={text}
            name="todo-item-desc"
            id=""
            readOnly
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex items-center">
            <label className="flex items-center cursor-pointer relative">
              <input
                type="checkbox"
                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-pink-600 checked:border-pink-600"
                name="todo-check"
                onChange={(e) => {
                  setChecked((prev) => !prev);
                }}
                checked={completed}
              />
              <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strok-width="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
          <div>
            <input
              type="button"
              className={`px-4 py-1.5 ${
                !completed
                  ? " bg-blue-600 hover:bg-blue-700 cursor-pointer"
                  : "bg-gray-700 cursor-not-allowed"
              } rounded-md transition`}
              value="Edit"
              onClick={editHandler}
              name="edit-btn"
              disabled={completed}
            />
          </div>

          <div>
            <input
              type="button"
              className="px-4 py-1.5 bg-red-600 hover:bg-red-700 rounded-md cursor-pointer transition"
              value="Delete"
              onClick={deleteHandler}
              name="delete-btn"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
