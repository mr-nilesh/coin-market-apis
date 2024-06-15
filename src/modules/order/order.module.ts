import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { HttpClient } from 'src/infra/http/http.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    ConfigService,
    { provide: 'OrderService', useClass: OrderService },
    { provide: 'HttpClient', useClass: HttpClient },
  ],
})
export class OrderModule {}
