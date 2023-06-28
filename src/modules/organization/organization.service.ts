import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { Organization } from '.prisma/client';

@Injectable()
export class OrganizationService {
  constructor(private readonly prisma: PrismaService) {}

  async getOrganizationById(id: number): Promise<Organization | null> {
    return this.prisma.organization.findUnique({ where: { id } });
  }

  async createOrganization(createOrganizationDto: CreateOrganizationDto): Promise<Organization> {
    const { name, address } = createOrganizationDto;

    return this.prisma.organization.create({
      data: {
        name,
        address,
      },
    });
  }
}
