import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '20012020',
  database: 'brain-battle-db',
  synchronize: false,
  entities: ['src/**/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
});
