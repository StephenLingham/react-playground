import { Guid } from 'guid-typescript';

export class Product {
  public id: Guid;

  public name: string;

  constructor(name: string) {
    this.name = name;
    this.id = Guid.create();
  }
}
