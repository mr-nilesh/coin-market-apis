import { Injectable } from '@nestjs/common';
import { BybitService } from '../../../infra/bybit/bybit.service';
import { IMarketService } from './interfaces/market.service.interface';
import { ConfigService } from '@nestjs/config';
import { IHttpClient } from '../../../infra/http/http.interface';
import { API_URLS } from '../../../config/constant';
import { IBybitResponse } from '../../../infra/bybit/dto/bybitResponse.interface';
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
} from './dto/market';
import { getQueryString } from '../../../utils/utility';

@Injectable()
export class MarketService extends BybitService implements IMarketService {
  constructor(configService: ConfigService, httpClient: IHttpClient) {
    super(configService, httpClient);
  }

  async getServerTime(): Promise<IBybitResponse> {
    try {
      const payload: Buffer = Buffer.from('');
      const data: IBybitResponse = await this.requestData(
        'GET',
        API_URLS.bybit.getServerTime,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getKLine(filterObj: IGetKLineFilters): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getKLine}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getMarketPriceKLine(
    filterObj: IGetMarketPriceKLineFilters,
  ): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getMarketPriceKLine}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getIndexPriceKLine(
    filterObj: IGetIndexPriceKLineFilters,
  ): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getIndexPriceKLine}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getPremiumIndexPriceKLine(
    filterObj: IPremiumIndexPriceKLineFilters,
  ): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getPremiumIndexPriceKLine}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getInstrumentsInfo(
    filterObj: IGetInstrumentsInfoFilters,
  ): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getInstrumentsInfo}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getOrderbook(filterObj: IGetOrderbookFilters): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getOrderbook}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getTickers(filterObj: IGetTickersFilters): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getTickers}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getFundingRateHistory(
    filterObj: IGetFundingRateHistoryFilters,
  ): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getFundingRateHistory}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getPublicRecentTradingHistory(
    filterObj: IGetPublicRecentTradingHistoryFilters,
  ): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getPublicRecentTradingHistory}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getOpenInterest(
    filterObj: IGetOpenInterestFilters,
  ): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getOpenInterest}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getHistoricalVolatility(
    filterObj: IGetHistoricalVolatilityFilters,
  ): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getHistoricalVolatility}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getInsurance(filterObj: IGetInsuranceFilters): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getInsurance}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getRiskLimit(filterObj: IGetRiskLimitFilters): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getRiskLimit}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getDeliveryPrice(
    filterObj: IGetDeliveryPrice,
  ): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getDeliveryPrice}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getLongShortRatio(
    filterObj: IGetLongShortRatio,
  ): Promise<IBybitResponse> {
    try {
      const queryString = getQueryString(filterObj);
      const payload: Buffer = Buffer.from(queryString, 'utf-8');
      const data: IBybitResponse = await this.requestData(
        'GET',
        `${API_URLS.bybit.getLongShortRatio}?${queryString}`,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
