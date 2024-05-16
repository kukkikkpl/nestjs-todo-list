import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoListCreationDto } from './to-do-list.dto';
import { TodoListsService } from './to-do-list.service';
import { TodoList } from './to-do-list.interface';

@Controller('to-do-lists')
export class TodoListController {
  constructor(private todoListService: TodoListsService) {}

  @Get()
  async findAll(): Promise<TodoList[]> {
    return this.todoListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoListService.findOne(+id);
  }

  @Post()
  async create(@Body() todoListCreationDto: TodoListCreationDto) {
    this.todoListService.create(todoListCreationDto);
  }
}
