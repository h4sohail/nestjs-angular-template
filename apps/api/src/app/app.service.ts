import { Injectable } from '@nestjs/common';
import { Message } from '@nestjs-angular-template/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
