# coin-market-apis

This package is the wrapper for Coinstore API https://coinstore-openapi.github.io/en/index.html#introduction. We will include other exchanges soon.

## Installation
```bash
$ npm i coin-market-apis
```

## Env Variables
Add following environment varialbes in your .env file.
```
COIN_STORE_URL=coinstore url
COIN_STORE_SECRET_KEY=coin store secret key
COIN_STORE_API_KEY=coin store api key
```
NOTE: You need to whitelist your IP address in your coinstore account to access the coinstore APIs

## Usage
```
import { CoinStore } from 'coinstore-api';
async function yourFunction() {
  const coinStore = new CoinStore();
  await coinStore.initializeAPI();
  const assetsBalance = await coinStore.getAssetsBalance();
}
```

## Exposed API
Get current orders
```
const data = await coinStore.getCurrentOrders();
```

Get current orders v2
```
const filters = {
  symbol: '',
  ordId: 0,
  clOrdId: ''
};
const data = await coinStore.getCurrentOrdersV2(filters);
```

Get user's latest trade
```
const filters = {
  symbol: '', // required
  ordId: '',
  pageNum: 1,
  pageSize: 10,
  side: 1
};
const data = await coinStore.getLatestTrade(filters);
```

Cancel order
```
const filters = {
  symbol: '', // required
  ordId: 1 // required
};
const data = await coinStore.cancelOrder(filters);
```

One click cancellation (Cancel all orders for the specified trading pair)
```
const filters = {
  symbol: '', // required
};
const data = await coinStore.oneClickCancellation(filters);
```

Create order
```
const filters = {
  clOrdId: '',
  symbol: '', // required
  side: '', // required
  ordType: '', // required
  timeInForce: '',
  ordPrice: 0,
  ordQty: 0,
  ordAmt: 0,
  timestamp: 0, // required
};
const data = await coinStore.createOrder(filters);
```

Batch ordering
```
const filters = {
  symbol: '', // required
  timestamp: 0, // required
  orders: [{
    clOrdId: '',
    side: '', // required
    ordType: '', // required
    timeInForce: '',
    ordPrice: 0,
    ordQty: 0,
    ordAmt: 0,
  }] 
};
const data = await coinStore.batchOrdering(filters);
```

Batch cancellation
```
const filters = {
  symbol: '', // required
  orderIds: [1, 2] // required
};
const data = await coinStore.batchCancellation(filters);
```

Get order info
```
const filters = {
  ordId: 1
};
const data = await coinStore.getOrderInfo(filters);
```

Get order info v2
```
const filters = {
  ordId: 1,
  clOrdId: ''
};
const data = await coinStore.getOrderInfoV2(filters);
```

Currency and spot information
```
const filters = {
  symbolCodes: ['', ''],
  symbolIds: [1, 2]
};
const data = await coinStore.getSymbols(filters);
```

Currency information
```
const filters = {
  currencyCode: '' // required
};
const data = await coinStore.getCurrencyInfo(filters);
```

Get deposit address
```
const filters = {
  currencyCode: '', // required
  chain: '' // required
};
const data = await coinStore.getDepositAddress(filters);
```

Get deposit history
```
const filters = {
  currencyCode: '', // required
  startDate: '',
  endDate: '',
  fromId: 1,
  limit: 1,
  externalId: '',
  label: ''
};
const data = await coinStore.getDepositHistory(filters);
```

Get withdrawal history
```
const filters = {
  currencyCode: '', // required
  startDate: '',
  endDate: '',
  fromId: 1,
  limit: 1,
  externalId: '',
  label: ''
};
const data = await coinStore.getWithdrawalHistory(filters);
```

Withdrawal
```
const filters = {
  currencyCode: '', // required
  amount: '', // required
  address: '', // required
  chainType: '', // required
  tag: ''
};
const data = await coinStore.doWithdraw(filters);
```

Cancel withdrawal
```
const filters = {
  withdrawId: 1, // required
};
const data = await coinStore.cancelWithdraw(filters);
```

Transfer fund
```
const filters = {
  type: '', // required
  currencyCode: '', // required
  amount: '', // required
  from: 1, // required
  to: 1, // required
  subAccount: ''
};
const data = await coinStore.transferFund(filters);
```

For all the methods above if there is a payload that you need to pass, make sure you pass it in object as a method parameter.
For example:
```
const filterObj = {
  symbol: 'btcusdt' // symbol field is the same as coinstore APIs field
}
const data = await coinStore.getCurrentOrdersV2(filterObj);
```

