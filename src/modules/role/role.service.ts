import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from '.prisma/client';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  async getRoleById(id: number): Promise<Role | null> {
    return this.prisma.role.findUnique({ where: { id } });
  }

  async createRole(createRoleDto: CreateRoleDto): Promise<Role> {
    const { name } = createRoleDto;

    return this.prisma.role.create({
      data: {
        name,
      },
    });
  }
}
