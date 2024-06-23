export interface IPlaceOrderPayload {
  category: string;
  symbol: string;
  isLeverage?: number;
  side: string; // Buy or Sell
  orderType: string;
  qty: string;
  marketUnit?: string;
  price?: string;
  triggerDirection?: number;
  orderFilter?: string;
  triggerPrice?: string;
  triggerBy?: string;
  orderIv?: string;
  timeInForce?: string;
  positionIdx?: number;
  orderLinkId?: string;
  takeProfit?: string;
  stopLoss?: string;
  tpTriggerBy?: string;
  slTriggerBy?: string;
  reduceOnly?: boolean;
  closeOnTrigger?: boolean;
  smpType?: string;
  mmp?: boolean;
  tpslMode?: string;
  tpLimitPrice?: string;
  slLimitPrice?: string;
  tpOrderType?: string;
  slOrderType?: string;
}

export interface IAmendOrderPayload {
  category: string;
  symbol: string;
  orderId?: string;
  orderLinkId?: string;
  orderIv?: string;
  triggerPrice?: string;
  qty?: string;
  price?: string;
  tpslMode?: string;
  takeProfit?: string;
  stopLoss?: string;
  tpTriggerBy?: string;
  slTriggerBy?: string;
  triggerBy?: string;
  tpLimitPrice?: string;
  slLimitPrice?: string;
}

export interface ICancelOrderPayload {
  category: string;
  symbol: string;
  orderId?: string;
  orderLinkId?: string;
  orderFilter?: string;
}

export interface IGetRealTimeOpenAndClosedOrdersFilters {
  category: string;
  symbol?: string;
  baseCoin?: string;
  settleCoin?: string;
  orderId?: string;
  orderLinkId?: string;
  openOnly?: number;
  orderFilter?: string;
  limit?: number;
  cursor?: string;
}

export interface ICancelAllOrdersPayload {
  category: string;
  symbol?: string;
  baseCoin?: string;
  settleCoin?: string;
  orderFilter?: string;
  stopOrderType?: string;
}

export interface IGetOrderHistoryFilters {
  category: string;
  symbol?: string;
  baseCoin?: string;
  settleCoin?: string;
  orderId?: string;
  orderLinkId?: string;
  orderFilter?: string;
  orderStatus?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  cursor?: string;
}

export interface IGetTradeHistoryFilters {
  category: string;
  symbol?: string;
  orderId?: string;
  orderLinkId?: string;
  baseCoin?: string;
  startTime?: number;
  endTime?: number;
  execType?: string;
  limit?: number;
  cursor?: string;
}

export interface IBatchPlaceOrder {
  symbol: string;
  isLeverage?: number;
  side: string;
  orderType: string;
  qty: string;
  marketUnit?: string;
  price?: string;
  triggerDirection?: number;
  orderFilter?: string;
  triggerPrice?: string;
  triggerBy?: string;
  orderIv?: string;
  timeInForce?: string;
  positionIdx?: number;
  orderLinkId?: string;
  takeProfit?: string;
  stopLoss?: string;
  tpTriggerBy?: string;
  slTriggerBy?: string;
  reduceOnly?: boolean;
  closeOnTrigger?: boolean;
  smpType?: string;
  mmp?: boolean;
  tpslMode?: string;
  tpLimitPrice?: string;
  slLimitPrice?: string;
  tpOrderType?: string;
  slOrderType?: string;
}

export interface IBatchPlaceOrderPayload {
  category: string;
  request: IBatchPlaceOrder[];
}

export interface IBatchAmendOrder {
  symbol: string;
  request: IBatchAmendOrderPayload[];
}

export interface IBatchAmendOrderPayload {
  category: string;
  orderId?: string;
  orderLinkId?: string;
  orderIv?: string;
  triggerPrice?: string;
  qty?: string;
  price?: string;
  tpslMode?: string;
  takeProfit?: string;
  stopLoss?: string;
  tpTriggerBy?: string;
  slTriggerBy?: string;
  triggerBy?: string;
  tpLimitPrice?: string;
  slLimitPrice?: string;
}

export interface IBatchCancelOrder {
  symbol: string;
  orderId?: string;
  orderLinkId?: string;
}

export interface IBatchCancelOrderPayload {
  symbol: string;
  request: IBatchCancelOrder[];
}

export interface IGetSpotBorrowQuotaFilters {
  symbol: string;
  category: string;
  side: string;
}

export interface ISetDCPPayload {
  product?: string;
  timeWindow: number;
}
