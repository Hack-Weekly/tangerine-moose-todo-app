import { useEffect, useState } from "react";
import Todo from "./Todo.js";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:4000/todo");
      const data = await response.json();
      setTodos(data);
    })();
  }, []);

  return (
    <ul>
      {todos.map((todo) => {
        const todoDate = new Date(todo.date).toLocaleString();
        return <Todo key={todo._id} todo={todo} date={todoDate} />;
      })}
    </ul>
  );
};

export default TodoList;
