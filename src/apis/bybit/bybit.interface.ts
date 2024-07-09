import { IMarketService } from '../../modules/bybit/market/interfaces/market.service.interface';
import { ITradeService } from '../../modules/bybit/trade/interfaces/trade.service.interface';

export interface IBybit extends IMarketService, ITradeService {
  initializeAPI(): Promise<void>;
}
