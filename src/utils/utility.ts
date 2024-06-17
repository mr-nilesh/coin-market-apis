import { ITradeFilters } from '../modules/order/dto/order';

export const getQueryString = (filters: ITradeFilters): string => {
  const params = new URLSearchParams();
  ((filters && Object.keys(filters)) || []).forEach((filterKey: string) => {
    params.append(filterKey, filters[filterKey].toString());
  });
  return params.toString();
};
