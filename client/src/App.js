import { useState, useEffect } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:4000/todo");
      const data = await response.json();
      setTodos(data);
    })();
  }, []);

  const addTodoHandler = (todo) => {
    setTodos((prevState) => {
      return [...prevState, todo];
    });
    console.log(todo);
  };

  const todoCompletedHandler = (todo) => {
    // update the state of the todo
    const indexToUpdate = todos.findIndex((t) => t._id === todo._id);
    const newArr = [...todos];
    newArr[indexToUpdate].completed = true;
    setTodos(newArr);
  };

  const todoDeleteHandler = (todo) => {
    // update the state of the todo
  };

  return (
    <div className="App">
      <div id="title">
        <h1>Simple to-do app</h1>
      </div>
      <div className="add-item-form">
        <TodoForm onAddTodo={addTodoHandler} />
      </div>
      <div>
        <h1 id="list-title">My to-do list:</h1>
      </div>
      <div>
        <TodoList
          todos={todos}
          onTodoCompleted={todoCompletedHandler}
          todoDeleteHandler={todoDeleteHandler}
        />
      </div>
    </div>
  );
}

export default App;
