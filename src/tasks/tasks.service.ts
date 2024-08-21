import { Injectable, NotFoundException } from '@nestjs/common';

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

  createTask(task: any) {
    this.tasks.push({
      ...task,
      title: `Task ${this.tasks.length + 1}`,
      id: this.tasks.length + 1,
    });

    return task;
  }

  updateTask() {
    return 'updating task';
  }

  updateTaskStatus() {
    return 'updating status';
  }

  deleteTask() {
    return 'delete task';
  }
}
