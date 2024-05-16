import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './to-do-list.entity';
import { Repository } from 'typeorm';
import { TodoListCreationDto } from './to-do-list.dto';

@Injectable()
export class TodoListsService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  async create(todoCreationDto: TodoListCreationDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = todoCreationDto.title;
    return await this.todoRepository.save(todo);
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async findOne(id: number): Promise<Todo | null> {
    return await this.todoRepository.findOneBy({ id: id });
  }
}
