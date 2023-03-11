import Todo from './Todo.js';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <Todo key={todo._id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
