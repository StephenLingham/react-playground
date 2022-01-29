import { TodoItem } from '../models/TodoItem';
import { Action } from './Action';

const AddTodo = 'ADD_TODO';
const DeleteTodo = 'DELETE_TODO';
const ToggleDone = 'TOGGLE_DONE';

class TodoItemAction implements Action<TodoItem> {
  private _type: string;

  public get type(): string {
    return this._type;
  }

  private _payload: TodoItem;

  public get payload(): TodoItem {
    return this._payload;
  }

  constructor(type: string, payload: TodoItem) {
    this._type = type;
    this._payload = payload;
  }
}

export function todoItemsReducer(
  state: TodoItem[] = [],
  action: TodoItemAction
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

export type TodoActionCreator = (todoItem: TodoItem) => TodoItemAction;

export const addTodo: TodoActionCreator = (
  todoItem: TodoItem
): TodoItemAction => {
  return new TodoItemAction(AddTodo, todoItem);
};

export const deleteTodo: TodoActionCreator = (
  todoItem: TodoItem
): TodoItemAction => {
  return new TodoItemAction(DeleteTodo, todoItem);
};

export const toggleTodo: TodoActionCreator = (
  todoItem: TodoItem
): TodoItemAction => {
  return new TodoItemAction(ToggleDone, todoItem);
};
