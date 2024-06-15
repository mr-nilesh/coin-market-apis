import { Module } from '@nestjs/common';
import { FundService } from './fund.service';

@Module({
  providers: [FundService],
})
export class FundModule {}
