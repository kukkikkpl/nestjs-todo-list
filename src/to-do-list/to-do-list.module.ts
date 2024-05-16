import { Module } from '@nestjs/common';
import { TodoListController } from './to-do-list.controller';
import { TodoListsService } from './to-do-list.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './to-do-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoListController],
  providers: [TodoListsService],
})
export class TodoListModule {}
