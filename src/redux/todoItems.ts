import { TodoItem } from '../models/TodoItem';
import { createAction, PayloadAction } from '@reduxjs/toolkit';

const AddTodo = 'ADD_TODO';
const DeleteTodo = 'DELETE_TODO';
const ToggleDone = 'TOGGLE_DONE';

export function todoItemsReducer(
  state: TodoItem[] = [],
  action: PayloadAction<TodoItem>
): TodoItem[] {
  switch (action.type) {
    case AddTodo:
      return reduceAddTodo(state, action.payload);
    case DeleteTodo:
      return reduceDeleteTodo(state, action.payload);
    case ToggleDone:
      return reduceToggleDone(state, action.payload);
    default:
      return state;
  }
}

function reduceAddTodo(todoItems: TodoItem[], todoItem: TodoItem) {
  return [...todoItems, todoItem];
}

function reduceDeleteTodo(todoItems: TodoItem[], todoItem: TodoItem) {
  return todoItems.filter((item) => item.id === todoItem.id);
}

function reduceToggleDone(todoItems: TodoItem[], todoItem: TodoItem) {
  return todoItems.map((item) => {
    if (item.id === todoItem.id) {
      item.done = !item.done;
    }

    return item;
  });
}

export const addTodo = createAction<TodoItem>(AddTodo);

export const deleteTodo = createAction<TodoItem>(DeleteTodo);

export const toggleDone = createAction<TodoItem>(ToggleDone);
