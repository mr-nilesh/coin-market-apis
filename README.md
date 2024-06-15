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

## Usage
```
import { CoinStore } from 'coinstore-api';
async function yourFunction() {
  const coinStore = new CoinStore();
  await coinStore.initializeAPI();
  const assetsBalance = await coinStore.getAssetsBalance();
}
```
