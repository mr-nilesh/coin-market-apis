import { Module } from '@nestjs/common';
import { BasicInfoService } from './basicInfo.service';

@Module({
  providers: [BasicInfoService],
})
export class BasicInfoModule {}
