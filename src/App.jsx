import React, {useState, useEffect} from "react";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import UserAlert from "./components/UserAlert";

function App() {
  return (
    <>
      <div>
        <TodoAdd />
        <TodoList />
        <UserAlert />
      </div>
    </>
  );
}

export default App;
