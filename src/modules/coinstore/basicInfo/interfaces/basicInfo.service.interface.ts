import { ICoinStoreResponse } from '../../../../infra/coinstore/dto/coinstoreResponse.interface';
import { IGetCurrencyInfoFilters, IGetSymbolsFilters } from '../dto/basicInfo';

export interface IBasicInfoService {
  getSymbols(filterObj: IGetSymbolsFilters): Promise<ICoinStoreResponse>;
  getCurrencyInfo(
    filterObj: IGetCurrencyInfoFilters,
  ): Promise<ICoinStoreResponse>;
}
