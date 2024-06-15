import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';
import { Inject, Injectable } from '@nestjs/common';
import { ICoinStoreService, IRequestOptions } from './coinstore.interface';
import { IHttpClient } from '../http/http.interface';

@Injectable()
export class CoinStoreService implements ICoinStoreService {
  private _baseUrl: string;
  private _secretKey: string;
  private _apiKey: string;
  constructor(
    private readonly _configService: ConfigService,
    @Inject('HttpClient') private readonly _httpClient: IHttpClient,
  ) {
    this._baseUrl = this._configService.get('COIN_STORE_URL');
    this._secretKey = this._configService.get('COIN_STORE_SECRET_KEY');
    this._apiKey = this._configService.get('COIN_STORE_API_KEY');
  }

  expirationTime(): number {
    return Math.floor(Date.now() / 1000) * 1000;
  }

  generateExpirationTime(): string {
    return Math.floor(this.expirationTime() / 30000).toString();
  }

  /*
    Creates a buffer from the expiration time key.
    The buffer is used to store the expiration time securely. 
    @returns A Buffer containing the expiration time key 
  */
  private _createExpirationBuffer(): Buffer {
    const key = this.generateExpirationTime();
    return Buffer.from(key, 'utf-8');
  }

  /**
   * Generates an HMAC (Keyed-Hash Message Authentication Code) using the provided key and data.
   * @param {string} key - The secret key used for generating the HMAC.
   * @param {string | Buffer} data - The data to be hashed.
   * @returns {string} The generated HMAC as a hexadecimal string.
   */
  private _generateHmac(key: string, data: string | Buffer): string {
    return crypto.createHmac('sha256', key).update(data).digest('hex');
  }

  /**
   * Generates a key by creating an expiration buffer and then generating an HMAC using the secret key.
   */
  private _generateKey(): string {
    const data: Buffer = this._createExpirationBuffer();
    return this._generateHmac(this._secretKey, data);
  }

  /**
   * Generates a digital signature for the given payload using a generated key.
   * @param payload The payload to be signed.
   * @returns A string representing the digital signature.
   */
  private _generateSignature(payload: Buffer): string {
    const key: string = this._generateKey();
    return this._generateHmac(key, payload);
  }

  /**
   * Generates a request header object with required headers for API requests.
   * @param payload The payload to be signed for the request.
   * @returns An object containing the request headers.
   */
  private _requestHeader(payload: Buffer) {
    return {
      'X-CS-APIKEY': this._apiKey,
      'X-CS-SIGN': this._generateSignature(payload),
      'X-CS-EXPIRES': this.expirationTime().toString(),
      'exch-language': 'en_US',
      'Content-Type': 'application/json',
      Accept: '*/*',
      Connection: 'keep-alive',
    };
  }

  /*
    Sends an asynchronous HTTP request to the Coinstore API. 
    This function prepares the request headers and options, and then makes the request using the provided method (GET or POST). 
    @param method - The HTTP method to use for the request (GET or POST, PUT, PATCH) 
    @param requestUrl - The URL to send the request to 
    @param payload - The data to send with the request 
    @returns A Promise that resolves to the response from the API 
    @throws {ApplicationError} If the request to Coinstore API fails 
    */
  protected async requestData(
    method: string,
    requestUrl: string,
    payload: Buffer,
  ): Promise<any> {
    try {
      const headers = this._requestHeader(payload);
      const options: IRequestOptions = {
        hostname: this._baseUrl,
        path: requestUrl,
        method: method.toUpperCase(),
        headers: headers,
      };
      let response;
      switch (method) {
        case 'GET':
          response = await this._httpClient.get(payload, options);
          break;
        case 'POST':
          response = await this._httpClient.post(payload, options);
          break;
        default:
          break;
      }
      return response;
    } catch (error) {
      console.error('Unable to make API request to Coinstore', error);
      throw error;
    }
  }
}
