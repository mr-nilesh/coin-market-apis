import { ICoinStoreResponse } from '../../../infra/coinstore/dto/coinstoreResponse.interface';
import {
  IGetDepthFilters,
  IGetKLineFilters,
  IGetLatestPricesFilters,
  IMarketLatestTradesFilters,
} from '../dto/ticker';

export interface ITickerService {
  getTickers(): Promise<ICoinStoreResponse>;
  getDepth(filterObj: IGetDepthFilters): Promise<ICoinStoreResponse>;
  getKLine(filterObj: IGetKLineFilters): Promise<ICoinStoreResponse>;
  getMarketLatestTrade(
    filterObj: IMarketLatestTradesFilters,
  ): Promise<ICoinStoreResponse>;
  getLatestPrices(
    filterObj: IGetLatestPricesFilters,
  ): Promise<ICoinStoreResponse>;
}
