import { Injectable } from '@nestjs/common';
import { IAccountService } from './interfaces/account.service.interface';
import { ConfigService } from '@nestjs/config';
import { IAccountFilters } from './dto/account';
import { CoinStoreService } from '../../../infra/coinstore/coinstore.service';
import { IHttpClient } from '../../../infra/http/http.interface';
import { ICoinStoreResponse } from '../../../infra/coinstore/dto/coinstoreResponse.interface';
import { API_URLS } from '../../../config/constant';

@Injectable()
export class AccountService
  extends CoinStoreService
  implements IAccountService
{
  constructor(configService: ConfigService, httpClient: IHttpClient) {
    super(configService, httpClient);
  }

  async getAssetsBalance(
    filterObj: IAccountFilters = {},
  ): Promise<ICoinStoreResponse> {
    try {
      const payload: Buffer = Buffer.from(JSON.stringify(filterObj));
      const data: ICoinStoreResponse = await this.requestData(
        'POST',
        API_URLS.coinStore.getAssetsBalance,
        payload,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
