import { ICoinStoreResponse } from '@infra/coinstore/dto/coinstoreResponse.interface';
import { IAccountService } from '@modules/account/interfaces/account.service.interface';
import { ITradeFilters } from '@modules/order/dto/order';
import { IOrderService } from '@modules/order/interfaces/order.service.interface';
import { INestApplicationContext } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { ICoinStore } from './coinstore.interface';
import { IBasicInfoService } from '@modules/basicInfo/interfaces/basicInfo.service.interface';
import { IGetCurrencyInfoFilters } from '@modules/basicInfo/dto/basicInfo';
import {
  ICancelWithdrawFilters,
  IDepositAddressFilters,
  IDoWithdrawFilters,
  ITransferFund,
  IWithdrawalHistoryFilters,
} from '@modules/fund/dto/fund';
import { IFundService } from '@modules/fund/interfaces/fund.service.interface';

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

  async getCurrentOrdersV2(): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.getCurrentOrdersV2();
  }

  async getLatestTrade(filters: ITradeFilters): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.getLatestTrade(filters);
  }

  async cancelOrder(): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.cancelOrder();
  }

  async oneClickCancellation(): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.oneClickCancellation();
  }

  async createOrder(): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.createOrder();
  }

  async batchOrdering(): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.batchOrdering();
  }

  async batchCancellation(): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.batchCancellation();
  }

  async getOrderInfo(): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.getOrderInfo();
  }

  async getOrderInfoV2(): Promise<ICoinStoreResponse> {
    const orderService: IOrderService = this._nestApp.get('OrderService');
    return orderService.getOrderInfoV2();
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
}
