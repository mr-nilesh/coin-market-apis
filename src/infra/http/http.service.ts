import { Injectable } from '@nestjs/common';
import * as https from 'https';
import { ClientRequest } from 'http';
import { IHttpClient } from './http.interface';

/**
 * A custom HTTP client implementation that provides a set of methods for sending HTTP requests.
 * This client supports GET, POST, PUT, and DELETE requests, and allows for optional request options and payload.
 * It also handles JSON parsing and error logging.
 */
@Injectable()
export class HttpClient implements IHttpClient {
  constructor() {}

  /*
    Retrieves a resource asynchronously using the GET method. 
    @param options - Optional request options 
    @returns A Promise that resolves to the response data 
  **/
  async get<T>(payload: any, options?: https.RequestOptions): Promise<T> {
    return this.sendRequest<T>('GET', options, payload);
  }

  /* Sends a request with a payload using the POST method.
   * @param payload - The request payload
   * @param options - Optional request options
   * @returns A Promise that resolves to the response data
   **/
  async post<TRequest, TResponse>(
    payload: TRequest,
    options?: https.RequestOptions,
  ): Promise<TResponse> {
    return this.sendRequest<TResponse>('POST', options, payload);
  }

  /*
   Updates a resource asynchronously using the PUT method. 
   @param payload - The request payload * @param options - Optional request options 
   @returns A Promise that resolves to the response data 
  **/
  async put<TRequest, TResponse>(
    payload: TRequest,
    options?: https.RequestOptions,
  ): Promise<TResponse> {
    return this.sendRequest<TResponse>('PUT', options, payload);
  }

  /*
  Deletes a resource asynchronously using the DELETE method. 
  @param options - Optional request options 
  @returns A Promise that resolves to the response data 
  **/
  async delete<TResponse>(options?: https.RequestOptions): Promise<TResponse> {
    return this.sendRequest<TResponse>('DELETE', options);
  }

  /*
  Sends a request with a method, options, and optional payload. 
  @param method - The request method (GET, POST, PUT, DELETE, etc.) 
  @param options - Optional request options 
  @param payload - The request payload (optional) 
  @returns A Promise that resolves to the response data 
  */
  protected async sendRequest<T>(
    method: string,
    options?: any,
    payload?: any,
  ): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const requestOptions: https.RequestOptions = {
        method,
        ...options,
      };
      const req: ClientRequest = https.request(requestOptions, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            try {
              const parsedData = JSON.parse(data);
              resolve(parsedData);
            } catch (error) {
              reject(data as unknown as T);
            }
          } else {
            reject(
              new Error(`Request failed with status code ${res.statusCode}`),
            );
          }
        });
      });
      req.on('error', (error) => {
        console.error('An error occurred during the API request.', error);
        reject(error);
      });
      req.write(payload);
      req.end();
    });
  }
}
