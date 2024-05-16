import { IsNotEmpty } from 'class-validator';

export class TodoListCreationDto {
  @IsNotEmpty()
  title: string;
}
