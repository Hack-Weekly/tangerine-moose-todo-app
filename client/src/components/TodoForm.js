import { useState } from 'react';
import classes from './TodoForm.module.css';

const TodoForm = ({ onAddTodo }) => {
  const [itemText, setItemText] = useState('');
  const [error, setError] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (itemText === '') {
      setError([{ msg: 'You need to add an item.' }]);
      return;
    }
    const body = {
      item: itemText,
      createdDate: new Date().toISOString(),
      completed: false,
    };
    try {
      const call = await fetch('http://localhost:4000/todo', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const response = await call.json();
      if (!call.ok) {
        setError(response.errors);
      } else {
        onAddTodo({ ...body, _id: response.insertedId });
        console.log(response);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const changeHandler = (e) => {
    setItemText(e.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.formControl}>
        <label htmlFor="item">Add Todo Item</label>
        <input
          type="text"
          id="item"
          name="item"
          onChange={changeHandler}
          value={itemText}
        ></input>
      </div>
      <div className={classes.formActions}>
        <button type="submit" id="submit-btn">
          + Add
        </button>
      </div>
      {error && (
        <p className={classes.error}>
          Something went wrong: {error.map((e) => e.msg)}
        </p>
      )}
    </form>
  );
};

export default TodoForm;
