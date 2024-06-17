import { INestApplicationContext } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ICoinStore } from './coinstore.interface';
import { AppModule } from '../../app.module';
import { ICoinStoreResponse } from '../../infra/coinstore/dto/coinstoreResponse.interface';
import { IOrderService } from '../../modules/order/interfaces/order.service.interface';
import {
  IBatchOrderingRequest,
  ICancelBatchRequest,
  ICancelOrderRequest,
  ICreateOrderRequest,
  IGetCurrencyInfoV2Filters,
  IGetOrderInfoFilters,
  IOneClickCancellationRequest,
  IOrderFilters,
  ITradeFilters,
} from '../../modules/order/dto/order';
import { IAccountService } from '../../modules/account/interfaces/account.service.interface';
import { IBasicInfoService } from '../../modules/basicInfo/interfaces/basicInfo.service.interface';
import { IGetCurrencyInfoFilters } from '../../modules/basicInfo/dto/basicInfo';
import {
  ICancelWithdrawFilters,
  IDepositAddressFilters,
  IDoWithdrawFilters,
  ITransferFund,
  IWithdrawalHistoryFilters,
} from '../../modules/fund/dto/fund';
import { IFundService } from '../../modules/fund/interfaces/fund.service.interface';
import {
  IGetDepthFilters,
  IGetKLineFilters,
  IGetLatestPricesFilters,
  IMarketLatestTradesFilters,
} from '../../modules/ticker/dto/ticker';
import { ITickerService } from '../../modules/ticker/interfaces/ticker.service.interface';

export class CoinStore implements ICoinStore {
  private _nestApp: INestApplicationContext;
  constructor() {}

  async initializeAPI(): Promise<void> {
    this._nestApp = await NestFactory.createApplicationContext(AppModule);
  }

  async getCurrentOrders(): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.getCurrentOrders();
  }

  async getCurrentOrdersV2(
    filterObj: IOrderFilters,
  ): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.getCurrentOrdersV2(filterObj);
  }

  async getLatestTrade(filterObj: ITradeFilters): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.getLatestTrade(filterObj);
  }

  async cancelOrder(
    filterObj: ICancelOrderRequest,
  ): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.cancelOrder(filterObj);
  }

  async oneClickCancellation(
    filterObj: IOneClickCancellationRequest,
  ): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.oneClickCancellation(filterObj);
  }

  async createOrder(
    requestParams: ICreateOrderRequest,
  ): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.createOrder(requestParams);
  }

  async batchOrdering(
    requestParams: IBatchOrderingRequest,
  ): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.batchOrdering(requestParams);
  }

  async batchCancellation(
    requestParams: ICancelBatchRequest,
  ): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.batchCancellation(requestParams);
  }

  async getOrderInfo(
    filterObj: IGetOrderInfoFilters,
  ): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.getOrderInfo(filterObj);
  }

  async getOrderInfoV2(
    filterObj: IGetCurrencyInfoV2Filters,
  ): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.getOrderInfoV2(filterObj);
  }

  async getAssetsBalance(): Promise<ICoinStoreResponse> {
    const accountService: IAccountService = this._nestApp.get('AccountService');
    return accountService.getAssetsBalance({});
  }

  async getSymbols(): Promise<ICoinStoreResponse> {
    const basicInfoService: IBasicInfoService =
      this._nestApp.get('BasicInfoService');
    return basicInfoService.getSymbols({});
  }

  async getCurrencyInfo(
    filterObj: IGetCurrencyInfoFilters,
  ): Promise<ICoinStoreResponse> {
    const basicInfoService: IBasicInfoService =
      this._nestApp.get('BasicInfoService');
    return basicInfoService.getCurrencyInfo(filterObj);
  }

  async getDepositAddress(
    filterObj: IDepositAddressFilters,
  ): Promise<ICoinStoreResponse> {
    const fundService: IFundService = this._nestApp.get('FundService');
    return fundService.getDepositAddress(filterObj);
  }

  async getDepositHistory(
    filterObj: IDepositAddressFilters,
  ): Promise<ICoinStoreResponse> {
    const fundService: IFundService = this._nestApp.get('FundService');
    return fundService.getDepositHistory(filterObj);
  }

  async getWithdrawalHistory(
    filterObj: IWithdrawalHistoryFilters,
  ): Promise<ICoinStoreResponse> {
    const fundService: IFundService = this._nestApp.get('FundService');
    return fundService.getWithdrawalHistory(filterObj);
  }

  async doWithdraw(filterObj: IDoWithdrawFilters): Promise<ICoinStoreResponse> {
    const fundService: IFundService = this._nestApp.get('FundService');
    return fundService.doWithdraw(filterObj);
  }

  async cancelWithdraw(
    filterObj: ICancelWithdrawFilters,
  ): Promise<ICoinStoreResponse> {
    const fundService: IFundService = this._nestApp.get('FundService');
    return fundService.cancelWithdraw(filterObj);
  }

  async transferFund(filterObj: ITransferFund): Promise<ICoinStoreResponse> {
    const fundService: IFundService = this._nestApp.get('FundService');
    return fundService.transferFund(filterObj);
  }

  async getTickers(): Promise<ICoinStoreResponse> {
    const tickerService: ITickerService = this._nestApp.get('TickerService');
    return tickerService.getTickers();
  }

  async getDepth(filterObj: IGetDepthFilters): Promise<ICoinStoreResponse> {
    const tickerService: ITickerService = this._nestApp.get('TickerService');
    return tickerService.getDepth(filterObj);
  }

  async getKLine(filterObj: IGetKLineFilters): Promise<ICoinStoreResponse> {
    const tickerService: ITickerService = this._nestApp.get('TickerService');
    return tickerService.getKLine(filterObj);
  }

  async getMarketLatestTrade(
    filterObj: IMarketLatestTradesFilters,
  ): Promise<ICoinStoreResponse> {
    const tickerService: ITickerService = this._nestApp.get('TickerService');
    return tickerService.getMarketLatestTrade(filterObj);
  }

  async getLatestPrices(
    filterObj: IGetLatestPricesFilters,
  ): Promise<ICoinStoreResponse> {
    const tickerService: ITickerService = this._nestApp.get('TickerService');
    return tickerService.getLatestPrices(filterObj);
  }
}
