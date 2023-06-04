import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Account } from '../interfaces/account.interface';

@Injectable()
export class GoogleService {
  constructor(private readonly configService: ConfigService) {}
  async getUserData(token: string) {
    try {
      const response = await fetch(this.configService.get('GOOGLE_API'), {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data: Account = await response.json();
        return {
          id: data.sub,
          name: data.name,
          imgUrl: data.picture,
        };
      }
    } catch (error) {
      throw new Error(`A error ocuured ${error}`);
    }
  }
}
