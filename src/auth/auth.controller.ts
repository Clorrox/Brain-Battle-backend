import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User } from './entities/auth.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.getUserDataByToken(createAuthDto);
  }

  @Put('user/:userId')
  update(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.authService.updateUser(userId, updateUserDto)
  }
}
