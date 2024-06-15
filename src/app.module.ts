import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from './modules/account/account.module';
import { BasicInfoModule } from './modules/basicInfo/basicInfo.module';
import { FundModule } from './modules/fund/fund.module';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AccountModule,
    BasicInfoModule,
    FundModule,
    OrderModule,
  ],
  providers: [],
})
export class AppModule {}
