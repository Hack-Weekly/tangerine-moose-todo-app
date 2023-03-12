import React from "react";

const Todo = ({ todo, onTodoCompleted, onTodoDeleteHandler }) => {
  const date = new Date(todo.createdDate).toLocaleString();

  // TODO add todo item completed state
  const markItemComplete = async () => {
    // e.preventDefault();

    try {
      const call = await fetch(`http://localhost:4000/todo/${todo._id}`, {
        method: "PUT",
        body: JSON.stringify({ item_name: todo.item }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await call.json();
      if (!response.status === 204) {
        console.log("Something broke when marking a todo item as complete");
      }
      onTodoCompleted(todo);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async () => {
    try {
      const call = await fetch(`http://localhost:4000/todo/${todo._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await call.json();
      if (!response.status === 204) {
        console.log("Something broke when marking a todo item as complete");
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
      <div>
        <button id="itemDeleteBtn" onClick={deleteItem}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
