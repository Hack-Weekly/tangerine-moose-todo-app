import React from 'react';

const Todo = ({ todo }) => {
  const date = new Date(todo.createdDate).toLocaleString();

  // TODO add todo item completed state
  const markItemComplete = async () => {
    // e.preventDefault();
    console.log(todo._id);

    const data = {
      complete: 'complete',
    };
    try {
      const call = await fetch(`http://localhost:4000/todo/item`, {
        method: 'PUT',
        body: JSON.stringify(data),
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
