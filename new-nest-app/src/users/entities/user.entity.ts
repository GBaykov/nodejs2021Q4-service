import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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

//   @OneToMany<Task>((_type) => Task, (task: Task): string => task.userId as string, { cascade: true })
//   tasks: Task[];

  static toResponse(user?:  User){
    if (!user) return undefined;

    const { id, name, login } = user;
    return { id, name, login };
  }
}