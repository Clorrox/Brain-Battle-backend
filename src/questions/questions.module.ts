import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { Category } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Category])],
  controllers: [QuestionsController],
  providers: [QuestionsService],
  exports: [QuestionsService, TypeOrmModule],
})
export class QuestionsModule {}
