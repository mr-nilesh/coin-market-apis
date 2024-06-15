import { PAGINATION } from 'src/config/constant';
import { ITradeFilters } from 'src/modules/order/dto/order';

export const getQueryString = (filters: ITradeFilters): string => {
  const params = new URLSearchParams();
  if (filters?.pageNum) {
    params.append('pageNum', filters.pageNum.toString());
  }
  if (filters?.pageSize) {
    params.append('pageSize', filters.pageSize.toString());
  } else if (filters?.pageNum && !filters.pageSize) {
    params.append('pageSize', PAGINATION.defaultRecords.toString());
  }
  return params.toString();
};
