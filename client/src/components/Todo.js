import React from 'react';

const Todo = ({ todo, onTodoCompleted }) => {
  const date = new Date(todo.createdDate).toLocaleString();

  // TODO add todo item completed state
  const markItemComplete = async () => {
    // e.preventDefault();
    onTodoCompleted(todo);
    try {
      const call = await fetch(`http://localhost:4000/todo/${todo._id}`, {
        method: 'PUT',
        body: JSON.stringify({ item_name: todo.item }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const response = await call.json();
      if (!response.status === 204) {
        console.log('Something broke when marking a todo item as complete');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <li>
          <h2>{todo.item}</h2>
          <p>{date}</p>
          <p>{todo.completed.toString()}</p>
        </li>
      </div>
      <div>
        <button id="itemCompletedBtn" onClick={markItemComplete}>
          Complete
        </button>
      </div>
    </div>
  );
};

export default Todo;
