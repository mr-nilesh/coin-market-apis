import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpClient } from '../../../infra/http/http.service';
import { MarketService } from './market.service';

@Module({
  providers: [
    ConfigService,
    { provide: 'MarketService', useClass: MarketService },
    { provide: 'HttpClient', useClass: HttpClient },
  ],
})
export class MarketModule {}
