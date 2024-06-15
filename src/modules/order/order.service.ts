import { Injectable } from '@nestjs/common';
import { IOrderService } from './interfaces/order.service.interface';
import { ConfigService } from '@nestjs/config';
import { ITradeFilters } from './dto/order';
import { CoinStoreService } from '../../infra/coinstore/coinstore.service';
import { IHttpClient } from '../../infra/http/http.interface';
import { ICoinStoreResponse } from '../../infra/coinstore/dto/coinstoreResponse.interface';
import { API_URLS } from '../../config/constant';
import { getQueryString } from '../../utils/utility';

@Injectable()
export class OrderService extends CoinStoreService implements IOrderService {
  constructor(configService: ConfigService, httpClient: IHttpClient) {
    super(configService, httpClient);
  }

  async getCurrentOrders(): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from('');
      const orders: ICoinStoreResponse = await this.requestData(
        'GET',
        API_URLS.coinStore.getCurrentOrders,
        payload,
      );
      return orders;
    } catch (error) {
      console.error(error, 'Error while fetching current orders.');
      throw error;
    }
  }
  async getCurrentOrdersV2(): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from('');
      const orders: ICoinStoreResponse = await this.requestData(
        'GET',
        API_URLS.coinStore.getCurrentOrdersV2,
        payload,
      );
      return orders;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getLatestTrade(filters: ITradeFilters): Promise<ICoinStoreResponse> {
    try {
      const queryString: string = this._getQueryStringWithSymbol(filters);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const orders: ICoinStoreResponse = await this.requestData(
        'GET',
        `${API_URLS.coinStore.getLatestTrade}?${queryString}`,
        payload,
      );
      return orders;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async cancelOrder(): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from('');
      const orders: ICoinStoreResponse = await this.requestData(
        'POST',
        API_URLS.coinStore.cancelOrder,
        payload,
      );
      return orders;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async oneClickCancellation(): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from('');
      const orders: ICoinStoreResponse = await this.requestData(
        'POST',
        API_URLS.coinStore.oneClickCancellation,
        payload,
      );
      return orders;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async createOrder(): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from('');
      const orders: ICoinStoreResponse = await this.requestData(
        'POST',
        API_URLS.coinStore.createOrder,
        payload,
      );
      return orders;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async batchOrdering(): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from('');
      const orders: ICoinStoreResponse = await this.requestData(
        'POST',
        API_URLS.coinStore.batchOrdering,
        payload,
      );
      return orders;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async batchCancellation(): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from('');
      const orders: ICoinStoreResponse = await this.requestData(
        'POST',
        API_URLS.coinStore.batchCancellation,
        payload,
      );
      return orders;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getOrderInfo(): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from('');
      const orders: ICoinStoreResponse = await this.requestData(
        'GET',
        API_URLS.coinStore.getOrderInfo,
        payload,
      );
      return orders;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getOrderInfoV2(): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from('');
      const orders: ICoinStoreResponse = await this.requestData(
        'GET',
        API_URLS.coinStore.getOrderInfoV2,
        payload,
      );
      return orders;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  private _getQueryStringWithSymbol(filters: ITradeFilters): string {
    let queryString = `symbol=${filters.symbol}`;
    if (filters.pageNum) {
      queryString += getQueryString(filters);
    }
    return queryString;
  }
}
