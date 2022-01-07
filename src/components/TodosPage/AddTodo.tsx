import { Button } from '../Button';

export function AddTodo() {
  return (
    <>
      <input placeholder="Enter task to do" type="textentry" />
      <Button text="Add" clickHandler={() => alert('t')} />
    </>
  );
}
