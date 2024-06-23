import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpClient } from '../../../infra/http/http.service';
import { TradeService } from './trade.service';

@Module({
  providers: [
    ConfigService,
    { provide: 'TradeService', useClass: TradeService },
    { provide: 'HttpClient', useClass: HttpClient },
  ],
})
export class TradeModule {}
