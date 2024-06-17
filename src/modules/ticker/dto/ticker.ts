export interface IGetDepthFilters {
  symbol: string;
  depth?: number;
}

export interface IGetKLineFilters {
  symbol: string;
  period?: string;
  size?: number;
}

export interface IMarketLatestTradesFilters {
  symbol: string;
  size?: number;
}

export interface IGetLatestPricesFilters {
  symbol: string;
}
