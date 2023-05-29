import { IsArray } from 'class-validator';
import { CreateQuestionDto } from 'src/questions/dto/create-question.dto';

export class CreateSeedDto {
  @IsArray()
  arrayData: CreateQuestionDto[];
}
