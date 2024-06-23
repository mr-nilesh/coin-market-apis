import { INestApplicationContext } from '@nestjs/common';
import { IBybit } from './bybit.interface';
import { AppModule } from '../../app.module';
import { NestFactory } from '@nestjs/core';
import { IBybitResponse } from '../../infra/bybit/dto/bybitResponse.interface';
import { IMarketService } from '../../modules/bybit/market/interfaces/market.service.interface';
import {
  IGetDeliveryPrice,
  IGetFundingRateHistoryFilters,
  IGetHistoricalVolatilityFilters,
  IGetIndexPriceKLineFilters,
  IGetInstrumentsInfoFilters,
  IGetInsuranceFilters,
  IGetKLineFilters,
  IGetLongShortRatio,
  IGetMarketPriceKLineFilters,
  IGetOpenInterestFilters,
  IGetOrderbookFilters,
  IGetPublicRecentTradingHistoryFilters,
  IGetRiskLimitFilters,
  IGetTickersFilters,
  IPremiumIndexPriceKLineFilters,
} from '../../modules/bybit/market/dto/market';
import {
  IAmendOrderPayload,
  IBatchAmendOrderPayload,
  IBatchCancelOrderPayload,
  IBatchPlaceOrderPayload,
  ICancelAllOrdersPayload,
  ICancelOrderPayload,
  IGetOrderHistoryFilters,
  IGetRealTimeOpenAndClosedOrdersFilters,
  IGetSpotBorrowQuotaFilters,
  IGetTradeHistoryFilters,
  IPlaceOrderPayload,
  ISetDCPPayload,
} from '../../modules/bybit/trade/dto/trade';
import { ITradeService } from '../../modules/bybit/trade/interfaces/trade.service.interface';

// TODO: Need to add Bybit APIs
export class Bybit implements IBybit {
  private _nestApp: INestApplicationContext;
  constructor() {}
  async initializeAPI(): Promise<void> {
    this._nestApp = await NestFactory.createApplicationContext(AppModule);
  }

  async getServerTime(): Promise<IBybitResponse> {
    const service: IMarketService = this._nestApp.get('MarketService');
    return service.getServerTime();
  }

  async getKLine(filterObj: IGetKLineFilters): Promise<IBybitResponse> {
    const service: IMarketService = this._nestApp.get('MarketService');
    return service.getKLine(filterObj);
  }

  async getMarketPriceKLine(
    filterObj: IGetMarketPriceKLineFilters,
  ): Promise<IBybitResponse> {
    const service: IMarketService = this._nestApp.get('MarketService');
    return service.getMarketPriceKLine(filterObj);
  }

  async getIndexPriceKLine(
    filterObj: IGetIndexPriceKLineFilters,
  ): Promise<IBybitResponse> {
    const service: IMarketService = this._nestApp.get('MarketService');
    return service.getIndexPriceKLine(filterObj);
  }

  async getPremiumIndexPriceKLine(
    filterObj: IPremiumIndexPriceKLineFilters,
  ): Promise<IBybitResponse> {
    const service: IMarketService = this._nestApp.get('MarketService');
    return service.getPremiumIndexPriceKLine(filterObj);
  }

  async getInstrumentsInfo(
    filterObj: IGetInstrumentsInfoFilters,
  ): Promise<IBybitResponse> {
    const service: IMarketService = this._nestApp.get('MarketService');
    return service.getInstrumentsInfo(filterObj);
  }

  async getOrderbook(filterObj: IGetOrderbookFilters): Promise<IBybitResponse> {
    const service: IMarketService = this._nestApp.get('MarketService');
    return service.getOrderbook(filterObj);
  }

  async getTickers(filterObj: IGetTickersFilters): Promise<IBybitResponse> {
    const service: IMarketService = this._nestApp.get('MarketService');
    return service.getTickers(filterObj);
  }

  async getFundingRateHistory(
    filterObj: IGetFundingRateHistoryFilters,
  ): Promise<IBybitResponse> {
    const service: IMarketService = this._nestApp.get('MarketService');
    return service.getFundingRateHistory(filterObj);
  }

  async getPublicRecentTradingHistory(
    filterObj: IGetPublicRecentTradingHistoryFilters,
  ): Promise<IBybitResponse> {
    const service: IMarketService = this._nestApp.get('MarketService');
    return service.getPublicRecentTradingHistory(filterObj);
  }

  async getOpenInterest(
    filterObj: IGetOpenInterestFilters,
  ): Promise<IBybitResponse> {
    const service: IMarketService = this._nestApp.get('MarketService');
    return service.getOpenInterest(filterObj);
  }

  async getHistoricalVolatility(
    filterObj: IGetHistoricalVolatilityFilters,
  ): Promise<IBybitResponse> {
    const service: IMarketService = this._nestApp.get('MarketService');
    return service.getHistoricalVolatility(filterObj);
  }

  async getInsurance(filterObj: IGetInsuranceFilters): Promise<IBybitResponse> {
    const service: IMarketService = this._nestApp.get('MarketService');
    return service.getInsurance(filterObj);
  }

  async getRiskLimit(filterObj: IGetRiskLimitFilters): Promise<IBybitResponse> {
    const service: IMarketService = this._nestApp.get('MarketService');
    return service.getRiskLimit(filterObj);
  }

  async getDeliveryPrice(
    filterObj: IGetDeliveryPrice,
  ): Promise<IBybitResponse> {
    const service: IMarketService = this._nestApp.get('MarketService');
    return service.getDeliveryPrice(filterObj);
  }

  async getLongShortRatio(
    filterObj: IGetLongShortRatio,
  ): Promise<IBybitResponse> {
    const service: IMarketService = this._nestApp.get('MarketService');
    return service.getLongShortRatio(filterObj);
  }

  async placeOrder(filterObj: IPlaceOrderPayload): Promise<IBybitResponse> {
    const service: ITradeService = this._nestApp.get('TradeService');
    return service.placeOrder(filterObj);
  }

  async amendOrder(filterObj: IAmendOrderPayload): Promise<IBybitResponse> {
    const service: ITradeService = this._nestApp.get('TradeService');
    return service.amendOrder(filterObj);
  }

  async cancelOrder(filterObj: ICancelOrderPayload): Promise<IBybitResponse> {
    const service: ITradeService = this._nestApp.get('TradeService');
    return service.cancelOrder(filterObj);
  }

  async getRealTimeOpenAndClosedOrders(
    filterObj: IGetRealTimeOpenAndClosedOrdersFilters,
  ): Promise<IBybitResponse> {
    const service: ITradeService = this._nestApp.get('TradeService');
    return service.getRealTimeOpenAndClosedOrders(filterObj);
  }

  async cancelAllOrders(
    filterObj: ICancelAllOrdersPayload,
  ): Promise<IBybitResponse> {
    const service: ITradeService = this._nestApp.get('TradeService');
    return service.cancelAllOrders(filterObj);
  }

  async getOrderHistory(
    filterObj: IGetOrderHistoryFilters,
  ): Promise<IBybitResponse> {
    const service: ITradeService = this._nestApp.get('TradeService');
    return service.getOrderHistory(filterObj);
  }

  async getTradeHistory(
    filterObj: IGetTradeHistoryFilters,
  ): Promise<IBybitResponse> {
    const service: ITradeService = this._nestApp.get('TradeService');
    return service.getTradeHistory(filterObj);
  }

  async batchPlaceOrder(
    filterObj: IBatchPlaceOrderPayload,
  ): Promise<IBybitResponse> {
    const service: ITradeService = this._nestApp.get('TradeService');
    return service.batchPlaceOrder(filterObj);
  }

  async batchAmendOrder(
    filterObj: IBatchAmendOrderPayload,
  ): Promise<IBybitResponse> {
    const service: ITradeService = this._nestApp.get('TradeService');
    return service.batchAmendOrder(filterObj);
  }

  async batchCancelOrder(
    filterObj: IBatchCancelOrderPayload,
  ): Promise<IBybitResponse> {
    const service: ITradeService = this._nestApp.get('TradeService');
    return service.batchCancelOrder(filterObj);
  }

  async getSpotBorrowQuota(
    filterObj: IGetSpotBorrowQuotaFilters,
  ): Promise<IBybitResponse> {
    const service: ITradeService = this._nestApp.get('TradeService');
    return service.getSpotBorrowQuota(filterObj);
  }

  async setDCP(filterObj: ISetDCPPayload): Promise<IBybitResponse> {
    const service: ITradeService = this._nestApp.get('TradeService');
    return service.setDCP(filterObj);
  }
}
