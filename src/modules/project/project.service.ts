import { Injectable } from '@nestjs/common';
import { ProjectRepository } from './project.repository';
import { Project } from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async getAllProjects(): Promise<Project[]> {
    return this.projectRepository.findAll({});
  }

  async getProjectById(id?: number): Promise<Project> {
    return this.projectRepository.findById({ id: id });
  }

  // Other methods for creating, updating, and deleting projects
}
