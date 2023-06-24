import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async getAllTasks(): Promise<Task[]> {
    return this.taskRepository.findAll({});
  }

  async getTaskById(id: number): Promise<Task> {
    return this.taskRepository.findById({ id: id });
  }

  // Other methods for creating, updating, and deleting tasks
}
