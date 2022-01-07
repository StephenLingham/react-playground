import { NavBar } from '../NavBar';
import { AddTodo } from './AddTodo';

export function TodosPage(): JSX.Element {
  return (
    <>
      <NavBar />
      <h1>Todos</h1>
      <AddTodo />
    </>
  );
}
