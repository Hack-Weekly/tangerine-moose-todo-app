import React from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div id="title">
        <h1>Simple to-do app</h1>
      </div>
      <div className="add-item-form">
        <TodoForm />
      </div>
      <div>
        <h1 id="list-title">My to-do list:</h1>
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
