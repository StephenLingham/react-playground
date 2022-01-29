import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TodoItem } from '../../models/TodoItem';
import { addTodo, TodoActionCreator } from '../../redux/todoItems';
import { Button } from '../Button';

function AddTodoComponent(props: { addTodo: TodoActionCreator }): JSX.Element {
  const [todoText, setTodoText] = useState('');

  return (
    <>
      <input
        placeholder="Enter task to do"
        type="textentry"
        value={todoText}
        onChange={handleChange}
      />
      <Button text="Add" clickHandler={handleClick} />
    </>
  );

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(event.target.value);
  }

  function handleClick() {
    if (todoText === '') {
      alert('Please enter a description of the task');

      return;
    }

    props.addTodo(new TodoItem(todoText));
    setTodoText('');
  }
}

const mapDispatchToProps = {
  addTodo,
};

export const AddTodo = connect(null, mapDispatchToProps)(AddTodoComponent);
