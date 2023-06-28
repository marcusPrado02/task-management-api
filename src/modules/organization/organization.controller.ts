import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { Organization } from '.prisma/client';

@Controller('organizations')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Get(':id')
  async getOrganizationById(@Param('id') id: number): Promise<Organization | null> {
    return this.organizationService.getOrganizationById(id);
  }

  @Post()
  async createOrganization(@Body() createOrganizationDto: CreateOrganizationDto): Promise<Organization> {
    return this.organizationService.createOrganization(createOrganizationDto);
  }
}
