import { Injectable } from '@nestjs/common';
import { CoinStoreService } from '../../../infra/coinstore/coinstore.service';
import { ConfigService } from '@nestjs/config';
import { IHttpClient } from '../../../infra/http/http.interface';
import { ITickerService } from './interfaces/ticker.service.interface';
import { ICoinStoreResponse } from '../../../infra/coinstore/dto/coinstoreResponse.interface';
import { API_URLS } from '../../../config/constant';
import {
  IGetDepthFilters,
  IGetKLineFilters,
  IGetLatestPricesFilters,
  IMarketLatestTradesFilters,
} from './dto/ticker';
import { getQueryString } from '../../../utils/utility';

@Injectable()
export class TickerService extends CoinStoreService implements ITickerService {
  constructor(configService: ConfigService, httpClient: IHttpClient) {
    super(configService, httpClient);
  }

  async getTickers(): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from('');
      const orders: ICoinStoreResponse = await this.requestData(
        'GET',
        API_URLS.coinStore.getTickers,
        payload,
      );
      return orders;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getDepth(filters: IGetDepthFilters): Promise<ICoinStoreResponse> {
    try {
      const copyFilters = { ...filters };
      delete copyFilters.symbol;
      const queryString = getQueryString(copyFilters);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const orders: ICoinStoreResponse = await this.requestData(
        'GET',
        `${API_URLS.coinStore.getDepth}/${filters.symbol}?${queryString}`,
        payload,
      );
      return orders;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getKLine(filters: IGetKLineFilters): Promise<ICoinStoreResponse> {
    try {
      const copyFilters = { ...filters };
      delete copyFilters.symbol;
      const queryString = getQueryString(copyFilters);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const orders: ICoinStoreResponse = await this.requestData(
        'GET',
        `${API_URLS.coinStore.getKLine}/${filters.symbol}?${queryString}`,
        payload,
      );
      return orders;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getMarketLatestTrade(
    filters: IMarketLatestTradesFilters,
  ): Promise<ICoinStoreResponse> {
    try {
      const copyFilters = { ...filters };
      delete copyFilters.symbol;
      const queryString = getQueryString(copyFilters);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const orders: ICoinStoreResponse = await this.requestData(
        'GET',
        `${API_URLS.coinStore.getMarketLatestTrade}/${filters.symbol}?${queryString}`,
        payload,
      );
      return orders;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getLatestPrices(
    filters: IGetLatestPricesFilters,
  ): Promise<ICoinStoreResponse> {
    try {
      const queryString = getQueryString(filters);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const orders: ICoinStoreResponse = await this.requestData(
        'GET',
        `${API_URLS.coinStore.getLatestPrices}?${queryString}`,
        payload,
      );
      return orders;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
