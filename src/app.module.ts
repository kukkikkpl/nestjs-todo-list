import { Module } from '@nestjs/common';
import { TodoListModule } from './to-do-list/to-do-list.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from './common/configs/db.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigService,
    }),
    TodoListModule,
  ],
})
export class AppModule {}
