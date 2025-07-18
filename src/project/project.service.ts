import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProjectService extends PrismaClient implements OnModuleInit{

  async onModuleInit() {
    await this.$connect();
  }

  create(createProjectDto: CreateProjectDto, file: Express.Multer.File) {
    // createProjectDto.image = file.filename;
    return this.project.create({
      data: createProjectDto
    });
  }

  findAll() {
    return this.project.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  findOne(id: string) {
    return this.project.findFirst({
      where: { id }
    });
  }

  update(id: string, updateProjectDto: UpdateProjectDto) {
    return this.project.update({
      data: updateProjectDto,
      where: { id }
    });
  }

  remove(id: string) {
    return this.project.delete({
      where: { id }
    });
  }
}
