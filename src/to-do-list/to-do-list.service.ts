import { Injectable } from '@nestjs/common';
import { TodoList } from './to-do-list.interface';

@Injectable()
export class TodoListsService {
  private readonly todoList: TodoList[] = [];

  create(todoList: TodoList) {
    this.todoList.push(todoList);
  }

  findAll(): TodoList[] {
    return this.todoList;
  }
}
