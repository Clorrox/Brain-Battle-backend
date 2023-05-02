import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity({ name: 'question' })
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  qeustion: string;

  @Column('text')
  correctAnswer: string;

  @Column('text', {
    array: true,
    default: [],
  })
  wrongAnswers: string[];

  @ManyToOne(() => Category, (category) => category.question, { eager: true })
  category: Category;
}
