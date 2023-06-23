import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';

class UserDto {
    @IsString()
    name?: string

    @IsString()
    imgUrl?: string

    @IsNumber()
    level?: number

    @IsNumber()
    expToNextLevel?: number

    @IsNumber()
    exp?: number

    @IsNumber()
    gamesPlayed?: number

    @IsNumber()
    gamesWon?: number

    @IsNumber()
    lostGames?: number

    @IsString()
    country?: string
}
export class UpdateUserDto extends PartialType(UserDto) {}