import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      return new NotFoundException();
    }

    return task;
  }

  createTask(task: CreateTaskDto) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
      title: `Task ${this.tasks.length + 1}`,
    });

    return task;
  }

  updateTask(task: UpdateTaskDto) {
    console.log(task);
    return 'updating task';
  }

  updateTaskStatus() {
    return 'updating status';
  }

  deleteTask() {
    return 'delete task';
  }
}
