import { ICoinStoreResponse } from '../../../infra/coinstore/dto/coinstoreResponse.interface';
import { ITradeFilters } from '../dto/order';

export interface IOrderService {
  getCurrentOrders(): Promise<ICoinStoreResponse>;
  getCurrentOrdersV2(): Promise<ICoinStoreResponse>;
  getLatestTrade(filters: ITradeFilters): Promise<ICoinStoreResponse>;
  cancelOrder(): Promise<ICoinStoreResponse>;
  oneClickCancellation(): Promise<ICoinStoreResponse>;
  createOrder(): Promise<ICoinStoreResponse>;
  batchOrdering(): Promise<ICoinStoreResponse>;
  batchCancellation(): Promise<ICoinStoreResponse>;
  getOrderInfo(): Promise<ICoinStoreResponse>;
  getOrderInfoV2(): Promise<ICoinStoreResponse>;
}
