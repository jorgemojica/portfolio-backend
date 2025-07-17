import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { ResumeModule } from './resume/resume.module';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [ProfileModule, ResumeModule, ActivityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
