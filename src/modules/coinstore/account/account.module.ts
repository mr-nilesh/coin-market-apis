import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { ConfigService } from '@nestjs/config';
import { HttpClient } from '../../../infra/http/http.service';

@Module({
  providers: [
    ConfigService,
    { provide: 'AccountService', useClass: AccountService },
    { provide: 'HttpClient', useClass: HttpClient },
  ],
})
export class AccountModule {}
