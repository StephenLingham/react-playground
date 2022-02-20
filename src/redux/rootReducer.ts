import { combineReducers } from 'redux';
import { productsReducer } from './products';
import { todoItemsReducer } from './todoItems';

export const rootReducer = combineReducers({
  products: productsReducer,
  todoItems: todoItemsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
