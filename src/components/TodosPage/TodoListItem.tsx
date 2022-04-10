import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import React from 'react';
import { connect } from 'react-redux';
import { TodoItem } from '../../models/TodoItem';
import { deleteTodo } from '../../redux/todoItems';
import { toggleDone } from '../../redux/todoItems';
import { Button } from '../Button';

type Props = {
  todoItem: TodoItem;
  deleteTodo: ActionCreatorWithPayload<TodoItem>;
  toggleTodo: ActionCreatorWithPayload<TodoItem>;
};

function TodoListItemComponent(props: Props) {
  return (
    <li>
      <Button
        text={'X'}
        clickHandler={() => props.deleteTodo(props.todoItem)}
      />
      <span>{props.todoItem.task}</span>
      <div>
        <span>{'Done: '}</span>
        <input
          type="checkbox"
          checked={props.todoItem.done}
          onClick={handleCheckboxClick}
        />
      </div>
    </li>
  );
}

function handleCheckboxClick(event: React.MouseEvent) {
  // toggleDone(props.todoItem)
  // event.
}

const mapDispatchToProps = {
  deleteTodo,
  toggleDone,
};

export const TodoListItem = connect(
  null,
  mapDispatchToProps
)(TodoListItemComponent);
