import { connect } from 'react-redux';
import { TodoItem } from '../../models/TodoItem';
import { RootState } from '../../redux/rootReducer';
import { TodoListItem } from './TodoListItem';

function TodosListComponent(props: TodoItem[]) {
  return (
    <>
      <ul style={listStyles}>
        {props.map((todoItem: TodoItem) => {})}{' '}
        {/*  <TodoListItem todoItem={todoItem}/>)} */}
      </ul>
    </>
  );
}

function mapStateToProps(state: RootState) {
  return state.todoItems;
}

export const TodosList = connect(mapStateToProps)(TodosListComponent);

const listStyles = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};
