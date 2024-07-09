import { ICoinStoreResponse } from '../../../../infra/coinstore/dto/coinstoreResponse.interface';
import {
  IBatchOrderingRequest,
  ICancelBatchRequest,
  ICancelOrderRequest,
  ICreateOrderRequest,
  IGetCurrencyInfoV2Filters,
  IGetOrderInfoFilters,
  IOneClickCancellationRequest,
  IOrderFilters,
  ITradeFilters,
} from '../dto/order';

export interface IOrderService {
  getCurrentOrders(): Promise<ICoinStoreResponse>;
  getCurrentOrdersV2(filterObj: IOrderFilters): Promise<ICoinStoreResponse>;
  getLatestTrade(filterObj: ITradeFilters): Promise<ICoinStoreResponse>;
  cancelOrder(requestParams: ICancelOrderRequest): Promise<ICoinStoreResponse>;
  oneClickCancellation(
    requestParams: IOneClickCancellationRequest,
  ): Promise<ICoinStoreResponse>;
  createOrder(requestParams: ICreateOrderRequest): Promise<ICoinStoreResponse>;
  batchOrdering(
    requestParams: IBatchOrderingRequest,
  ): Promise<ICoinStoreResponse>;
  batchCancellation(
    requestParams: ICancelBatchRequest,
  ): Promise<ICoinStoreResponse>;
  getOrderInfo(filterObj: IGetOrderInfoFilters): Promise<ICoinStoreResponse>;
  getOrderInfoV2(
    filterObj: IGetCurrencyInfoV2Filters,
  ): Promise<ICoinStoreResponse>;
}
