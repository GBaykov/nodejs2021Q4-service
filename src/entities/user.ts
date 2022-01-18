/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Task } from './task';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 100 })
  name: string;

  @Column('varchar', { length: 100 })
  login: string;

  @Column('varchar', { length: 100 })
  password: string;

  @OneToMany<Task>((_type) => Task, (task: Task): string => task.userId as string, { cascade: true })
  tasks: Task[];

  static toResponse(user?: Partial<User>): Partial<User> | undefined {
    if (!user) return undefined;

    const { id, name, login } = user;
    return { id, name, login };
  }
}
