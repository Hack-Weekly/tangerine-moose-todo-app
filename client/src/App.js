import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>This is Matt's addition for a test commit!</h2>
      <div id="title">
        <h1>Simple to-do app</h1>
      </div>
      <div id="add-item-form">
        <form method="POST">
          <input type="text" id="todo-item"></input>
          <button type="submit" id="submit-btn">
            + Add
          </button>
        </form>
      </div>
      <div>{/* add to-do item component here? */}</div>
    </div>
  );
}

export default App;
