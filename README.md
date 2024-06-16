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
const data = await coinStore.getCurrentOrdersV2();
```

Get user's latest trade
```
const data = await coinStore.getLatestTrade();
```

Cancel order
```
const data = await coinStore.cancelOrder();
```

One click cancellation
```
const data = await coinStore.oneClickCancellation();
```

Create order
```
const data = await coinStore.createOrder();
```

Batch ordering
```
const data = await coinStore.batchOrdering();
```

Batch cancellation
```
const data = await coinStore.batchCancellation();
```

Get order info
```
const data = await coinStore.getOrderInfo();
```

Get order info v2
```
const data = await coinStore.getOrderInfoV2();
```

Currency and spot information
```
const data = await coinStore.getSymbols();
```

Currency information
```
const data = await coinStore.getCurrencyInfo();
```

Get deposit address
```
const data = await coinStore.getDepositAddress();
```

Get deposit history
```
const data = await coinStore.getDepositHistory();
```

Get withdrawal history
```
const data = await coinStore.getWithdrawalHistory();
```

Withdrawal
```
const data = await coinStore.doWithdraw();
```

Cancel withdrawal
```
const data = await coinStore.cancelWithdraw();
```

Transfer fund
```
const data = await coinStore.transferFund();
```

For all the methods above if there is a payload that you need to pass, make sure you pass it in object as a method parameter.
For example:
```
const filterObj = {
  symbol: 'btcusdt' // symbol field is the same as coinstore APIs field
}
const data = await coinStore.getCurrentOrdersV2(filterObj);
```

