import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { Permission } from '.prisma/client';

@Injectable()
export class PermissionService {
  constructor(private readonly prisma: PrismaService) {}

  async getPermissionById(id: number): Promise<Permission | null> {
    return this.prisma.permission.findUnique({ where: { id } });
  }

  async createPermission(createPermissionDto: CreatePermissionDto): Promise<Permission> {
    const { name } = createPermissionDto;

    return this.prisma.permission.create({
      data: {
        name,
      },
    });
  }
}
