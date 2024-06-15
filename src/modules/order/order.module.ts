import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { ConfigService } from '@nestjs/config';
import { HttpClient } from '../../infra/http/http.service';

@Module({
  providers: [
    ConfigService,
    { provide: 'OrderService', useClass: OrderService },
    { provide: 'HttpClient', useClass: HttpClient },
  ],
})
export class OrderModule {}
