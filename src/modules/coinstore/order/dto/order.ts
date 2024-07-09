export interface IOrder {
  baseCurrency: string;
  quoteCurrency: string;
  side: string;
  cumQty: string;
  ordId: number;
  clOrdId: string;
  ordType: string;
  ordQty: string;
  cumAmt: string;
  accountId: number;
  timeInForce: string;
  ordPrice: string;
  leavesQty: string;
  avgPrice: string;
  ordStatus: string;
  symbol: string;
  timestamp: number;
}

export interface ITradeFilters {
  symbol: string;
  ordId?: number;
  pageNum?: number;
  pageSize?: number;
  side?: number;
}

export interface IOrderFilters {
  symbol?: string;
  ordId?: number;
  clOrdId?: string;
}

export interface ICancelOrderRequest {
  symbol: string;
  ordId: number;
}

export interface IOneClickCancellationRequest {
  symbol: string;
}

export interface ICreateOrderRequest {
  clOrdId?: string;
  symbol: string;
  side: string;
  ordType: string;
  timeInForce?: string;
  ordPrice?: number;
  ordQty?: number;
  ordAmt?: number;
  timestamp: number;
}

export interface IBatchOrderingOrder {
  clOrdId?: string;
  side: string;
  ordType: string;
  timeInForce?: string;
  ordPrice?: number;
  ordQty?: number;
  ordAmt?: number;
}

export interface IBatchOrderingRequest {
  symbol: string;
  timestamp: number;
  orders?: IBatchOrderingOrder[];
}

export interface ICancelBatchRequest {
  symbol: string;
  orderIds: string[];
}

export interface IGetOrderInfoFilters {
  ordId?: number;
}

export interface IGetCurrencyInfoV2Filters {
  ordId?: number;
  clOrdId?: string;
}
