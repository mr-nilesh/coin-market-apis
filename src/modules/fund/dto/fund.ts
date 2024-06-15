export interface IDepositAddressFilters {
  currencyCode: string;
  chain: string;
}

export interface IDepositHistoryFilters {
  currencyCode: string;
  startDate?: string;
  endDate?: string;
  fromId?: number;
  limit?: number;
  externalId?: string;
  label?: string;
}

export interface IWithdrawalHistoryFilters {
  currencyCode?: string;
  startDate?: string;
  endDate?: string;
  fromId?: number;
  limit?: number;
  externalId?: string;
  label?: string;
}

export interface IDoWithdrawFilters {
  currencyCode: string;
  amount: string;
  address: string;
  chainType: string;
  tag?: string;
}

export interface ICancelWithdrawFilters {
  withdrawId: number;
}

export interface ITransferFund {
  type: string;
  currencyCode: string;
  amount: string;
  from: number;
  to: number;
  subAccount?: string;
}
