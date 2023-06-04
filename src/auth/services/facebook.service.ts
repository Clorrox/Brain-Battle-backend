import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Root } from '../interfaces/facebook.interfaces';

@Injectable()
export class FacebookService {
  constructor(private readonly configService: ConfigService) {}
  async getUserData(token: string) {
    try {
      const response = await fetch(
        `${this.configService.get('FACEBOOK_API')}=${token}`,
      );
      if (response.ok) {
        const data: Root = await response.json();
        return {
          id: data.id,
          name: data.name,
          imgUrl: data.picture.data.url,
        };
      }
    } catch (error) {
      throw new Error(`A error ocuured ${error}`);
    }
  }
}
