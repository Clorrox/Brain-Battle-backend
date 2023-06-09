import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryColumn('text')
  id: string;
  @Column('text')
  name: string;
  @Column('text')
  imgUrl: string;
  @Column('int', {
    default: 1,
    nullable: true,
  })
  level?: number;
  @Column('int', {
    nullable: true,
    default: 100,
  })
  expToNextLevel?: number;
  @Column('int', {
    default: 0,
    nullable: true,
  })
  exp?: number;
  @Column('int', {
    default: 0,
    nullable: true,
  })
  gamesPlayed?: number;
  @Column('int', {
    nullable: true,
    default: 0,
  })
  gamesWon?: number;
  @Column('int', {
    default: 0,
    nullable: true,
  })
  lostGames?: number;
  @Column('text', {
    nullable: true,
  })
  country?: string;
}
