import { IsArray, IsString, MinLength } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  @MinLength(10)
  pregunta: string;
  @IsString()
  respuestaCorrecta: string;
  @IsArray()
  respuestasIncorrectas: Array<string>;
}
