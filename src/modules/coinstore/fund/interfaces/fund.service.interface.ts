import { ICoinStoreResponse } from '../../../../infra/coinstore/dto/coinstoreResponse.interface';
import {
  ICancelWithdrawFilters,
  IDepositAddressFilters,
  IDepositHistoryFilters,
  IDoWithdrawFilters,
  ITransferFund,
  IWithdrawalHistoryFilters,
} from '../dto/fund';

export interface IFundService {
  getDepositAddress(
    filterObj: IDepositAddressFilters,
  ): Promise<ICoinStoreResponse>;
  getDepositHistory(
    filterObj: IDepositHistoryFilters,
  ): Promise<ICoinStoreResponse>;
  getWithdrawalHistory(
    filterObj: IWithdrawalHistoryFilters,
  ): Promise<ICoinStoreResponse>;
  doWithdraw(filterObj: IDoWithdrawFilters): Promise<ICoinStoreResponse>;
  cancelWithdraw(
    filterObj: ICancelWithdrawFilters,
  ): Promise<ICoinStoreResponse>;
  transferFund(filterObj: ITransferFund): Promise<ICoinStoreResponse>;
}
