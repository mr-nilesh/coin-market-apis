import { ICoinStoreResponse } from '../../../infra/coinstore/dto/coinstoreResponse.interface';
import { IAccountFilters } from '../dto/account';

export interface IAccountService {
  getAssetsBalance(filterObj: IAccountFilters): Promise<ICoinStoreResponse>;
}
