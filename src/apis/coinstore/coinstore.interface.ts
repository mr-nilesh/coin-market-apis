import { IAccountService } from '../../modules/coinstore/account/interfaces/account.service.interface';
import { IBasicInfoService } from '../../modules/coinstore/basicInfo/interfaces/basicInfo.service.interface';
import { IFundService } from '../../modules/coinstore/fund/interfaces/fund.service.interface';
import { IOrderService } from '../../modules/coinstore/order/interfaces/order.service.interface';

export interface ICoinStore
  extends IAccountService,
    IBasicInfoService,
    IFundService,
    IOrderService {
  initializeAPI(): Promise<void>;
}
