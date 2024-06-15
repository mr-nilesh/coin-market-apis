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
