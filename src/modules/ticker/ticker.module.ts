import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpClient } from '../../infra/http/http.service';
import { TickerService } from './ticker.service';

@Module({
  providers: [
    ConfigService,
    { provide: 'TickerService', useClass: TickerService },
    { provide: 'HttpClient', useClass: HttpClient },
  ],
})
export class TickerModule {}
