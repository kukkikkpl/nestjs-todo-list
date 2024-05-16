import { AbstractEntity } from 'src/common/entities/base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Todo extends AbstractEntity {
  @Column()
  title: string;

  @OneToMany(() => Task, (task) => task.todo)
  tasks: Task[];
}

@Entity()
export class Task extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'boolean', default: false })
  finished: boolean;

  @Column({ name: 'due_date', type: 'timestamp', nullable: true })
  dueDate: Date;

  @ManyToOne(() => Todo, (todo) => todo.tasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'todo_id' })
  todo: Todo;
}
