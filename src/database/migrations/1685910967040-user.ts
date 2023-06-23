import { MigrationInterface, QueryRunner } from "typeorm";

export class User1685910967040 implements MigrationInterface {
    name = 'User1685910967040'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" text NOT NULL, "name" text NOT NULL, "imgUrl" text NOT NULL, "level" integer DEFAULT '1', "expToNextLevel" integer DEFAULT '100', "exp" integer DEFAULT '0', "gamesPlayed" integer DEFAULT '0', "gamesWon" integer DEFAULT '0', "lostGames" integer DEFAULT '0', CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
