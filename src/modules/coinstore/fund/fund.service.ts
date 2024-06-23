import { Injectable } from '@nestjs/common';
import { IFundService } from './interfaces/fund.service.interface';
import { ConfigService } from '@nestjs/config';
import {
  ICancelWithdrawFilters,
  IDepositAddressFilters,
  IDepositHistoryFilters,
  IDoWithdrawFilters,
  ITransferFund,
  IWithdrawalHistoryFilters,
} from './dto/fund';
import { CoinStoreService } from '../../../infra/coinstore/coinstore.service';
import { IHttpClient } from '../../../infra/http/http.interface';
import { ICoinStoreResponse } from '../../../infra/coinstore/dto/coinstoreResponse.interface';
import { API_URLS } from '../../../config/constant';

@Injectable()
export class FundService extends CoinStoreService implements IFundService {
  constructor(configService: ConfigService, httpClient: IHttpClient) {
    super(configService, httpClient);
  }

  async getDepositAddress(
    filterObj: IDepositAddressFilters,
  ): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from(JSON.stringify(filterObj));
      const data: ICoinStoreResponse = await this.requestData(
        'POST',
        API_URLS.coinStore.getDepositAddress,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getDepositHistory(
    filterObj: IDepositHistoryFilters,
  ): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from(JSON.stringify(filterObj));
      const data: ICoinStoreResponse = await this.requestData(
        'POST',
        API_URLS.coinStore.getDepositHistory,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getWithdrawalHistory(
    filterObj: IWithdrawalHistoryFilters,
  ): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from(JSON.stringify(filterObj));
      const data: ICoinStoreResponse = await this.requestData(
        'POST',
        API_URLS.coinStore.getWithdrawalHistory,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async doWithdraw(filterObj: IDoWithdrawFilters): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from(JSON.stringify(filterObj));
      const data: ICoinStoreResponse = await this.requestData(
        'POST',
        API_URLS.coinStore.doWithdraw,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async cancelWithdraw(
    filterObj: ICancelWithdrawFilters,
  ): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from(JSON.stringify(filterObj));
      const data: ICoinStoreResponse = await this.requestData(
        'POST',
        API_URLS.coinStore.cancelWithdraw,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async transferFund(filterObj: ITransferFund): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from(JSON.stringify(filterObj));
      const data: ICoinStoreResponse = await this.requestData(
        'POST',
        API_URLS.coinStore.transferFund,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
