import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { Permission } from '.prisma/client';

@Controller('permissions')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get(':id')
  async getPermissionById(@Param('id') id: number): Promise<Permission | null> {
    return this.permissionService.getPermissionById(id);
  }

  @Post()
  async createPermission(@Body() createPermissionDto: CreatePermissionDto): Promise<Permission> {
    return this.permissionService.createPermission(createPermissionDto);
  }
}
