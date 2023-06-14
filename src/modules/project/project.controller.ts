import { Controller, Get, Param } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from '@prisma/client';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async getAllProjects(): Promise<Project[]> {
    return this.projectService.getAllProjects();
  }

  @Get(':id')
  async getProjectById(@Param('id') id: number): Promise<Project | null> {
    return this.projectService.getProjectById(id);
  }

  // Other route handlers for creating, updating, and deleting projects
}
