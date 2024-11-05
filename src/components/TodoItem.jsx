import React from "react";

function TodoItem({ text, index, editHandler, deleteHandler }) {
  return (
    <>
      <div className="flex gap-2 items-center py-2">
        <span className="ml-2">{`${index + 1}.`}</span>
        <div className="flex-grow">
          <input
            type="text"
            className="outline-none bg-transparent px-2 w-full"
            value={text}
            name="todo-item-desc"
            id=""
            readOnly
          />
        </div>

        <div>
          <input
            type="button"
            className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-md mr-2 cursor-pointer transition"
            value="Edit"
            onClick={editHandler}
            name="edit-btn"
          />
          <input
            type="button"
            className="px-4 py-1.5 bg-red-600 hover:bg-red-700 rounded-md cursor-pointer transition"
            value="Delete"
            onClick={deleteHandler}
            name="delete-btn"
          />
        </div>
      </div>
    </>
  );
}

export default TodoItem;
