import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="title">
        <h1>Simple to-do app</h1>
      </div>
      <div id="add-item-form">
        <form action="" method="POST">
          <label htmlFor="item"></label>
          <input type="text" id="item" name="item"></input>
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
