import { IAccountService } from '@modules/account/interfaces/account.service.interface';
import { IBasicInfoService } from '@modules/basicInfo/interfaces/basicInfo.service.interface';
import { IFundService } from '@modules/fund/interfaces/fund.service.interface';
import { IOrderService } from '@modules/order/interfaces/order.service.interface';

export interface ICoinStore
  extends IAccountService,
    IBasicInfoService,
    IFundService,
    IOrderService {
  initializeAPI(): Promise<void>;
}
