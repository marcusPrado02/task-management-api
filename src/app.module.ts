import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ProjectModule } from './modules/project/project.module';
import { TaskModule } from './modules/task/task.module';
import { PrismaModule } from './prisma.module';
import { ThrottlerModule } from '@nestjs/throttler';


@Module({
  imports: [
    UserModule,
    ProjectModule,
    TaskModule,
    PrismaModule,
    ThrottlerModule.forRoot({
      ttl: 50,
      limit: 10,
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
