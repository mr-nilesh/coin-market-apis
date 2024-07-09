import * as crypto from 'crypto';
import { Inject, Injectable } from '@nestjs/common';
import { IBybitService } from './bybit.service.interface';
import { ConfigService } from '@nestjs/config';
import { IHttpClient } from '../http/http.interface';
import { IRequestOptions } from '../coinstore/coinstore.service.interface';

@Injectable()
export class BybitService implements IBybitService {
  private _baseUrl: string;
  private _secretKey: string;
  private _apiKey: string;
  private _recvWindow: number = 5000;
  constructor(
    private readonly _configService: ConfigService,
    @Inject('HttpClient') private readonly _httpClient: IHttpClient,
  ) {
    this._baseUrl = this._configService.get('BYBIT_URL');
    this._apiKey = this._configService.get('BYBIT_API_KEY');
    this._secretKey = this._configService.get('BYBIT_SECRET_KEY');
  }

  expirationTime(): number {
    return Math.floor(Date.now() / 1000) * 1000;
  }

  generateExpirationTime(): string {
    return Math.floor(this.expirationTime() / 30000).toString();
  }

  private _getCurrentTimestamp() {
    return Date.now().toString();
  }

  private _generateSignature(parameters: Buffer) {
    return crypto
      .createHmac('sha256', this._secretKey)
      .update(
        this._getCurrentTimestamp() +
          this._apiKey +
          this._recvWindow +
          parameters,
      )
      .digest('hex');
  }

  /**
   * Generates a request header object with required headers for API requests.
   * @param payload The payload to be signed for the request.
   * @returns An object containing the request headers.
   */
  private _requestHeader(payload: Buffer) {
    return {
      'X-BAPI-SIGN-TYPE': '2',
      'X-BAPI-SIGN': this._generateSignature(payload),
      'X-BAPI-API-KEY': this._apiKey,
      'X-BAPI-TIMESTAMP': this._getCurrentTimestamp(),
      'X-BAPI-RECV-WINDOW': this._recvWindow.toString(),
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
