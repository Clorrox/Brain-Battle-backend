import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionsService {
  private readonly logger = new Logger('QuestionService');
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}
  async create(question: Question) {
    try {
      const questionCreated = await this.questionRepository.create({
        ...question,
      });
      this.questionRepository.save(questionCreated);
      return questionCreated;
    } catch (error) {
      return error;
    }
  }
}
