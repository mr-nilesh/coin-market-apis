import { Module } from '@nestjs/common';
import { BasicInfoService } from './basicInfo.service';
import { ConfigService } from '@nestjs/config';
import { HttpClient } from '../../infra/http/http.service';

@Module({
  providers: [
    ConfigService,
    { provide: 'BasicInfoService', useClass: BasicInfoService },
    { provide: 'HttpClient', useClass: HttpClient },
  ],
})
export class BasicInfoModule {}
