import { Guid } from 'guid-typescript';

export class TodoItem {
  public id: Guid;

  public task: string;

  public done: boolean;

  constructor(task: string) {
    this.id = Guid.create();
    this.task = task;
    this.done = false;
  }
}
