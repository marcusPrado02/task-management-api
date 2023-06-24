import { Controller, Get, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from '@prisma/client';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: number): Promise<Task | null> {
    return this.taskService.getTaskById(id);
  }

  // Other route handlers for creating, updating, and deleting tasks
}
