import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';
import { QuestionsModule } from 'src/questions/questions.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [QuestionsModule],
})
export class SeedModule {}
