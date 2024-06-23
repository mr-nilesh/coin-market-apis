import { Injectable } from '@nestjs/common';
import { BybitService } from '../../../infra/bybit/bybit.service';
import { ConfigService } from '@nestjs/config';
import { IHttpClient } from '../../../infra/http/http.interface';
import { ITradeService } from './interfaces/trade.service.interface';
import { IBybitResponse } from '../../../infra/bybit/dto/bybitResponse.interface';
import { API_URLS } from '../../../config/constant';
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
} from './dto/trade';
import { getQueryString } from '../../../utils/utility';

@Injectable()
export class TradeService extends BybitService implements ITradeService {
  constructor(configService: ConfigService, httpClient: IHttpClient) {
    super(configService, httpClient);
  }

  async placeOrder(
    requestPayload: IPlaceOrderPayload,
  ): Promise<IBybitResponse> {
    try {
      const payload: Buffer = Buffer.from(JSON.stringify(requestPayload));
      const data: IBybitResponse = await this.requestData(
        'POST',
        API_URLS.bybit.placeOrder,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async amendOrder(
    requestPayload: IAmendOrderPayload,
  ): Promise<IBybitResponse> {
    try {
      const payload: Buffer = Buffer.from(JSON.stringify(requestPayload));
      const data: IBybitResponse = await this.requestData(
        'POST',
        API_URLS.bybit.amendOrder,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async cancelOrder(
    requestPayload: ICancelOrderPayload,
  ): Promise<IBybitResponse> {
    try {
      const payload: Buffer = Buffer.from(JSON.stringify(requestPayload));
      const data: IBybitResponse = await this.requestData(
        'POST',
        API_URLS.bybit.cancelOrder,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getRealTimeOpenAndClosedOrders(
    filterObj: IGetRealTimeOpenAndClosedOrdersFilters,
  ): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getRealTimeOpenAndClosedOrders}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async cancelAllOrders(
    requestPayload: ICancelAllOrdersPayload,
  ): Promise<IBybitResponse> {
    try {
      const payload: Buffer = Buffer.from(JSON.stringify(requestPayload));
      const data: IBybitResponse = await this.requestData(
        'POST',
        API_URLS.bybit.cancelAllOrders,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getOrderHistory(
    filterObj: IGetOrderHistoryFilters,
  ): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getOrderHistory}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getTradeHistory(
    filterObj: IGetTradeHistoryFilters,
  ): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getTradeHistory}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async batchPlaceOrder(
    requestPayload: IBatchPlaceOrderPayload,
  ): Promise<IBybitResponse> {
    try {
      const payload: Buffer = Buffer.from(JSON.stringify(requestPayload));
      const data: IBybitResponse = await this.requestData(
        'POST',
        API_URLS.bybit.batchPlaceOrder,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async batchAmendOrder(
    requestPayload: IBatchAmendOrderPayload,
  ): Promise<IBybitResponse> {
    try {
      const payload: Buffer = Buffer.from(JSON.stringify(requestPayload));
      const data: IBybitResponse = await this.requestData(
        'POST',
        API_URLS.bybit.batchAmendOrder,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async batchCancelOrder(
    requestPayload: IBatchCancelOrderPayload,
  ): Promise<IBybitResponse> {
    try {
      const payload: Buffer = Buffer.from(JSON.stringify(requestPayload));
      const data: IBybitResponse = await this.requestData(
        'POST',
        API_URLS.bybit.batchCancelOrder,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getSpotBorrowQuota(
    filterObj: IGetSpotBorrowQuotaFilters,
  ): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getSpotBorrowQuota}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async setDCP(requestPayload: ISetDCPPayload): Promise<IBybitResponse> {
    try {
      const payload: Buffer = Buffer.from(JSON.stringify(requestPayload));
      const data: IBybitResponse = await this.requestData(
        'POST',
        API_URLS.bybit.setDCP,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
