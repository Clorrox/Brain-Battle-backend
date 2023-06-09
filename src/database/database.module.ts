import { Module } from '@nestjs/common';
import { DatabaseProviders } from './database.service';

@Module({
  imports: [DatabaseProviders],
  exports: [DatabaseProviders],
  providers: [],
})
export class DatabaseModule {}
