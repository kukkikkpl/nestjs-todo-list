import { Module } from '@nestjs/common';
import { TodoListController } from './to-do-list.controller';
import { TodoListsService } from './to-do-list.service';

@Module({
  controllers: [TodoListController],
  providers: [TodoListsService],
})
export class TodoListModule {}
