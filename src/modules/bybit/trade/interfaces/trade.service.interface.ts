import { IBybitResponse } from '../../../../infra/bybit/dto/bybitResponse.interface';
import {
  IAmendOrderPayload,
  IBatchAmendOrderPayload,
  IBatchCancelOrderPayload,
  IBatchPlaceOrderPayload,
  ICancelAllOrdersPayload,
  ICancelOrderPayload,
  IGetOrderHistoryFilters,
  IGetRealTimeOpenAndClosedOrdersFilters,
  IGetSpotBorrowQuotaFilters,
  IGetTradeHistoryFilters,
  IPlaceOrderPayload,
  ISetDCPPayload,
} from '../dto/trade';

export interface ITradeService {
  placeOrder(payload: IPlaceOrderPayload): Promise<IBybitResponse>;
  amendOrder(payload: IAmendOrderPayload): Promise<IBybitResponse>;
  cancelOrder(payload: ICancelOrderPayload): Promise<IBybitResponse>;
  getRealTimeOpenAndClosedOrders(
    filterObj: IGetRealTimeOpenAndClosedOrdersFilters,
  ): Promise<IBybitResponse>;
  cancelAllOrders(payload: ICancelAllOrdersPayload): Promise<IBybitResponse>;
  getOrderHistory(filterObj: IGetOrderHistoryFilters): Promise<IBybitResponse>;
  getTradeHistory(payload: IGetTradeHistoryFilters): Promise<IBybitResponse>;
  batchPlaceOrder(payload: IBatchPlaceOrderPayload): Promise<IBybitResponse>;
  batchAmendOrder(payload: IBatchAmendOrderPayload): Promise<IBybitResponse>;
  batchCancelOrder(payload: IBatchCancelOrderPayload): Promise<IBybitResponse>;
  getSpotBorrowQuota(
    filterObj: IGetSpotBorrowQuotaFilters,
  ): Promise<IBybitResponse>;
  setDCP(payload: ISetDCPPayload): Promise<IBybitResponse>;
}
