export const API_URLS = {
  coinStore: {
    getCurrentOrders: '/api/trade/order/active',
    getCurrentOrdersV2: '/api/v2/trade/order/active',
    getLatestTrade: '/api/trade/match/accountMatches',
    cancelOrder: '/api/trade/order/cancel',
    oneClickCancellation: '/api/trade/order/cancelAll',
    createOrder: '/api/trade/order/place',
    batchOrdering: '/api/trade/order/placeBatch',
    batchCancellation: '/apitrade/order/cancelBatch',
    getOrderInfo: '/apitrade/order/orderInfo',
    getOrderInfoV2: '/api/v2/trade/order/orderInfo',
    getAssetsBalance: '/api/spot/accountList',
    getDepositAddress: '/api/fi/v3/asset/deposit/do',
    getDepositHistory: '/api/fi/v3/asset/deposit/record/list',
    getWithdrawalHistory: '/api/fi/v3/asset/withdraw/record/list',
    doWithdraw: '/api/fi/v3/asset/doWithdraw',
    cancelWithdraw: '/api/fi/v3/asset/cancelWithdraw',
    transferFund: '/api/v1/future/transfer',
    getSymbols: '/api/v2/public/config/spot/symbols',
    getCurrencyInfo: '/api/fi/v1/common/currency',
    getTickers: '/api/v1/market/tickers',
    getDepth: '/api/v1/market/depth',
    getKLine: '/api/v1/market/kline',
    getMarketLatestTrade: '/api/v1/market/trade',
    getLatestPrices: '/api/v1/ticker/price',
  },
};

export const PAGINATION = {
  defaultRecords: 20,
};
