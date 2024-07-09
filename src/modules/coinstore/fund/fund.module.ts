import { Module } from '@nestjs/common';
import { FundService } from './fund.service';
import { ConfigService } from '@nestjs/config';
import { HttpClient } from '../../../infra/http/http.service';

@Module({
  providers: [
    ConfigService,
    { provide: 'FundService', useClass: FundService },
    { provide: 'HttpClient', useClass: HttpClient },
  ],
})
export class FundModule {}
