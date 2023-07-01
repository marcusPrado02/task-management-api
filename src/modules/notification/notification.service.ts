import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { Notification } from '.prisma/client';

@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService) {}

  async getNotificationById(id: number): Promise<Notification | null> {
    return this.prisma.notification.findUnique({ where: { id } });
  }

  async createNotification(createNotificationDto: CreateNotificationDto): Promise<Notification> {
    const { content, userId } = createNotificationDto;

    return this.prisma.notification.create({
      data: {
        content,
        user: { connect: { id: userId } },
      },
    });
  }
}
