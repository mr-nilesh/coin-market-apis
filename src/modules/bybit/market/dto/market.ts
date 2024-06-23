export interface IGetKLineFilters {
  category?: string;
  symbol: string;
  interval: string;
  start?: number;
  end?: number;
  limit?: number;
}

export interface IGetMarketPriceKLineFilters extends IGetKLineFilters {}
export interface IGetIndexPriceKLineFilters extends IGetKLineFilters {}
export interface IPremiumIndexPriceKLineFilters extends IGetKLineFilters {}

export interface IGetInstrumentsInfoFilters {
  category: string;
  symbol?: string;
  status?: string;
  baseCoin?: string;
  limit?: number;
  cursor?: string;
}

export interface IGetOrderbookFilters {
  category: string;
  symbol: string;
  limit?: number;
}

export interface IGetTickersFilters {
  category: string;
  symbol?: string;
  baseCoin?: string;
  expDate?: string;
}

export interface IGetFundingRateHistoryFilters {
  category: string;
  symbol: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IGetPublicRecentTradingHistoryFilters {
  category: string;
  symbol?: string;
  baseCoin?: string;
  optionType?: string;
  limit?: number;
}

export interface IGetOpenInterestFilters {
  category: string;
  symbol: string;
  intervalTime: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  cursor?: string;
}

export interface IGetHistoricalVolatilityFilters {
  category: string;
  baseCoin?: string;
  period?: number;
  startTime?: number;
  endTime?: number;
}

export interface IGetInsuranceFilters {
  coin?: string;
}

export interface IGetRiskLimitFilters {
  category: string;
  symbol?: string;
  cursor?: string;
}

export interface IGetDeliveryPrice {
  category: string;
  symbol?: string;
  baseCoin?: string;
  limit?: number;
  cursor?: string;
}

export interface IGetLongShortRatio {
  category: string;
  symbol: string;
  period: string;
  limit?: number;
}
