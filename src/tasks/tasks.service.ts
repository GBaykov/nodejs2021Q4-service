import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>
  ){ }

  async create(createTaskDto: CreateTaskDto) {
    const task = this.tasksRepository.create(createTaskDto);
    const saved = await this.tasksRepository.save(task);
    return saved;
  }

  async findAll() {
    const tasks = await this.tasksRepository.find();
    return tasks;
  }

  async findOne(id: number | string) {
    const task = await this.tasksRepository.findOne(id);
    if (!task) {
      throw new NotFoundException(`task with id ${id} not found`);
    }
    return task;
  }

  async update(id: number | string, updateTaskDto: UpdateTaskDto) {
    const task = await this.tasksRepository.findOne(id);
    if (!task) {
      throw new NotFoundException(`task with id ${id} not found`);
    }
    task.boardId = updateTaskDto.boardId;
    task.columnId = updateTaskDto.columnId;
    task.description = updateTaskDto.description;
    task.order = updateTaskDto.order;
    task.title = updateTaskDto.title;
    task.userId = updateTaskDto.userId;
    await this.tasksRepository.save(task)
    //const task = await this.tasksRepository.save(id, updateTaskDto);
    //await this.tasksRepository.save(task)
    return task;
  }

  async remove(id: number | string) {
    return Boolean((await this.tasksRepository.delete( id )).affected);
  }
}
