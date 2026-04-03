import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { UserServiceService } from './user-service/user-service.service';
import { CoursesModule } from './courses/courses.module';
import { CoursesModule } from './courses/courses.module';
@Module({
  imports: [ConfigModule.forRoot(), UserModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService, UserServiceService],
})
export class AppModule { }
