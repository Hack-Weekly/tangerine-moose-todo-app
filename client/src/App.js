import React from 'react';
import './App.css';

import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <div id="title">
        <h1>Simple to-do app</h1>
      </div>
      <div className="add-item-form">
        <TodoForm />
      </div>
      <div>{/* add to-do item component here? */}</div>
    </div>
  );
}

export default App;
