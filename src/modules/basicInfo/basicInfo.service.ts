import { Injectable } from '@nestjs/common';
import { IBasicInfoService } from './interfaces/basicInfo.service.interface';
import { ConfigService } from '@nestjs/config';
import { IHttpClient } from '@infra/http/http.interface';
import { CoinStoreService } from '@infra/coinstore/coinstore.service';
import { IGetCurrencyInfoFilters, IGetSymbolsFilters } from './dto/basicInfo';
import { ICoinStoreResponse } from '@infra/coinstore/dto/coinstoreResponse.interface';
import { API_URLS } from '@config/constant';

@Injectable()
export class BasicInfoService
  extends CoinStoreService
  implements IBasicInfoService
{
  constructor(configService: ConfigService, httpClient: IHttpClient) {
    super(configService, httpClient);
  }

  async getSymbols(
    filterObj: IGetSymbolsFilters = {},
  ): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from(JSON.stringify(filterObj));
      const data: ICoinStoreResponse = await this.requestData(
        'POST',
        API_URLS.coinStore.getSymbols,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getCurrencyInfo(
    filterObj: IGetCurrencyInfoFilters,
  ): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from(JSON.stringify(filterObj));
      const orders: ICoinStoreResponse = await this.requestData(
        'GET',
        API_URLS.coinStore.getCurrencyInfo,
        payload,
      );
      return orders;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
