import React from 'react';

const Todo = ({ text, date }) => {
  return (
    <li>
      <h2>{text}</h2>
      <p>{date}</p>
    </li>
  );
};

export default Todo;
