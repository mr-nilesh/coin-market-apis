import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from './modules/coinstore/account/account.module';
import { BasicInfoModule } from './modules/coinstore/basicInfo/basicInfo.module';
import { FundModule } from './modules/coinstore/fund/fund.module';
import { OrderModule } from './modules/coinstore/order/order.module';
import { TickerModule } from './modules/coinstore/ticker/ticker.module';
import { MarketModule } from './modules/bybit/market/market.module';
import { TradeModule } from './modules/bybit/trade/trade.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // coinstore
    AccountModule,
    BasicInfoModule,
    FundModule,
    OrderModule,
    TickerModule,
    // bybit
    MarketModule,
    TradeModule,
  ],
  providers: [],
})
export class AppModule {}
