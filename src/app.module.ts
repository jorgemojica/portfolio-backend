import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { ResumeModule } from './resume/resume.module';
import { ActivityModule } from './activity/activity.module';
import { SoftSkillModule } from './soft-skill/soft-skill.module';
import { EducationModule } from './education/education.module';
import { ExperienceModule } from './experience/experience.module';
import { LanguageModule } from './language/language.module';
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [ProfileModule, ResumeModule, ActivityModule, SoftSkillModule, EducationModule, ExperienceModule, LanguageModule, SkillModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
