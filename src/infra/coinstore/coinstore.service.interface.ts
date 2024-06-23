export interface ICoinStoreService {
  expirationTime(): number;
  generateExpirationTime(): string;
}

export interface IRequestOptions {
  hostname: string;
  path: string;
  method: string;
  headers: any;
}
