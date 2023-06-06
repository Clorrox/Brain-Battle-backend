import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateAuthDto } from '../dto/create-auth.dto';
import { GoogleService } from './google.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/auth.entity';
import { Repository } from 'typeorm';
import { UserData } from '../interfaces/user.interface';
import { FacebookService } from './facebook.service';

@Injectable()
export class AuthService {
  private logger = new Logger('UsersService');
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly googleService: GoogleService,
    private readonly facebookService: FacebookService,
  ) {}

  async create(user: UserData): Promise<User> {
    const { id, name, imgUrl } = user;
    try {
      const newUser = await this.userRepository.create({
        id: id,
        name,
        imgUrl,
      });
      return await this.userRepository.save(newUser);
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async getUserDataByToken(createAuthDto: CreateAuthDto) {
    const { token, provider } = createAuthDto;
    const providerServices = {
      google: this.googleService,
      facebook: this.facebookService,
    };
    const user: UserData = await providerServices[provider].getUserData(token);

    const userFound = await this.findOneById(user.id);
    if (userFound) {
      return userFound;
    }

    return await this.create(user);
  }

  async findOneById(userId: string) {
    try {
      const userFound = await this.userRepository.findOneBy({
        id: userId,
      });
      return userFound;
    } catch (error) {
      throw new InternalServerErrorException(
        'Problem with the server contact with admins',
      );
    }
  }
  private handleDBErrors(error: any): never {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail.replace('Key', ''));
    }
    if (error.code === 'error-001') {
      throw new NotFoundException(`${error.datail}`);
    }
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Problem with the serve contact with admins',
    );
  }
}
