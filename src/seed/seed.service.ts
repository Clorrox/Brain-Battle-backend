import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { QuestionsService } from 'src/questions/questions.service';
import { CreateSeedDto } from './dtos/create-seed.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/questions/entities/category.entity';
import { Repository } from 'typeorm';
import { Question } from 'src/questions/entities/question.entity';

@Injectable()
export class SeedService {
  constructor(
    private readonly questionService: QuestionsService,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  async execute(category: string, createSeedDto: CreateSeedDto) {
    await this.fillTables(category, createSeedDto);
    return 'seed executed';
  }
  async fillTables(name: string, createSeedDto: CreateSeedDto) {
    let category: Category;
    category = await this.findCategoryByName(name);
    if (!category) {
      category = await this.createCategory(name);
    }
    const questions = this.convertQuestion(createSeedDto, category);
    await this.insertQuestion(questions);
  }
  private async insertQuestion(questions: Question[]) {
    await Promise.all([
      questions.forEach((question) => {
        this.questionService.create(question);
      }),
    ]);
    return true;
  }

  async createCategory(name: string) {
    try {
      const category = await this.categoryRepository.create({ name });
      await this.categoryRepository.save(category);
      return category;
    } catch (error) {
      throw new InternalServerErrorException(
        'Something was wrong with the server',
      );
    }
  }

  async findCategoryByName(name: string) {
    try {
      const categoryFound = await this.categoryRepository.findOneBy({ name });
      return categoryFound;
    } catch (error) {
      throw new InternalServerErrorException(
        'Something was wrong with the server',
      );
    }
  }

  convertQuestion(questions: CreateSeedDto, category: Category) {
    const questionsC = questions.arrayData.map((question) => ({
      question: question.pregunta,
      correctAnswer: question.respuestaCorrecta,
      wrongAnswers: question.respuestasIncorrectas,
      category,
    }));
    return questionsC;
  }
}
