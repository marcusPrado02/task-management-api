import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from '.prisma/client';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get(':id')
  async getRoleById(@Param('id') id: number): Promise<Role | null> {
    return this.roleService.getRoleById(id);
  }

  @Post()
  async createRole(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.roleService.createRole(createRoleDto);
  }
}
