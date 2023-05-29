import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const { DB_NAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_USERNAME } = process.env;

export const dataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: +DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: false,
  entities: ['src/**/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
});
