import { Body, Controller, Param, Post } from '@nestjs/common';
import { SeedService } from './seed.service';
import { CreateSeedDto } from './dtos/create-seed.dto';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}
  @Post(':category')
  createQuestion(
    @Param('category') category: string,
    @Body() createSeedDto: CreateSeedDto,
  ) {
    this.seedService.execute(category, createSeedDto);
  }
}
