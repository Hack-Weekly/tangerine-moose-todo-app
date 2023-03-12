import Todo from "./Todo.js";

const TodoList = ({ todos, onTodoCompleted, todoDeleteHandler }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo._id}
            todo={todo}
            onTodoCompleted={onTodoCompleted}
            todoDeleteHandler={todoDeleteHandler}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
