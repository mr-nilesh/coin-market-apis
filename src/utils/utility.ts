export const getQueryString = (filters: any): string => {
  const params = new URLSearchParams();
  ((filters && Object.keys(filters)) || []).forEach((filterKey: string) => {
    params.append(filterKey, filters[filterKey].toString());
  });
  return params.toString();
};
