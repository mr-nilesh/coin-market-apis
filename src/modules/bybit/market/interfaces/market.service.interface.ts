import { IBybitResponse } from '../../../../infra/bybit/dto/bybitResponse.interface';
import {
  IGetDeliveryPrice,
  IGetFundingRateHistoryFilters,
  IGetHistoricalVolatilityFilters,
  IGetIndexPriceKLineFilters,
  IGetInstrumentsInfoFilters,
  IGetInsuranceFilters,
  IGetKLineFilters,
  IGetLongShortRatio,
  IGetMarketPriceKLineFilters,
  IGetOpenInterestFilters,
  IGetOrderbookFilters,
  IGetPublicRecentTradingHistoryFilters,
  IGetRiskLimitFilters,
  IGetTickersFilters,
  IPremiumIndexPriceKLineFilters,
} from '../dto/market';

export interface IMarketService {
  getServerTime(): Promise<IBybitResponse>;
  getKLine(filterObj: IGetKLineFilters): Promise<IBybitResponse>;
  getMarketPriceKLine(
    filterObj: IGetMarketPriceKLineFilters,
  ): Promise<IBybitResponse>;
  getIndexPriceKLine(
    filterObj: IGetIndexPriceKLineFilters,
  ): Promise<IBybitResponse>;
  getPremiumIndexPriceKLine(
    filterObj: IPremiumIndexPriceKLineFilters,
  ): Promise<IBybitResponse>;
  getInstrumentsInfo(
    filterObj: IGetInstrumentsInfoFilters,
  ): Promise<IBybitResponse>;
  getOrderbook(filterObj: IGetOrderbookFilters): Promise<IBybitResponse>;
  getTickers(filterObj: IGetTickersFilters): Promise<IBybitResponse>;
  getFundingRateHistory(
    filterObj: IGetFundingRateHistoryFilters,
  ): Promise<IBybitResponse>;
  getPublicRecentTradingHistory(
    filterObj: IGetPublicRecentTradingHistoryFilters,
  ): Promise<IBybitResponse>;
  getOpenInterest(filterObj: IGetOpenInterestFilters): Promise<IBybitResponse>;
  getHistoricalVolatility(
    filterObj: IGetHistoricalVolatilityFilters,
  ): Promise<IBybitResponse>;
  getInsurance(filterObj: IGetInsuranceFilters): Promise<IBybitResponse>;
  getRiskLimit(filterObj: IGetRiskLimitFilters): Promise<IBybitResponse>;
  getDeliveryPrice(filterObj: IGetDeliveryPrice): Promise<IBybitResponse>;
  getLongShortRatio(filterObj: IGetLongShortRatio): Promise<IBybitResponse>;
}
