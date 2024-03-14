import { Module } from '@nestjs/common';
import { TodoListModule } from './to-do-list/to-do-list.module';

@Module({
  imports: [TodoListModule],
})
export class AppModule {}
