import Todo from './Todo.js';

const TodoList = ({ todos, onTodoCompleted }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Todo key={todo._id} todo={todo} onTodoComplete={onTodoCompleted} />
        );
      })}
    </ul>
  );
};

export default TodoList;
