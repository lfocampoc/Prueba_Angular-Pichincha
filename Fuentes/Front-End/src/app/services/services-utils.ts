import { HttpClient } from '@angular/common/http';
import { Config } from '@config/index';
import { Injectable } from '@angular/core';
import { SessionService } from './session-service';

@Injectable()
export class ServiceUtils {
  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) {}

  public buildRequest(endpoint: any, method: string, data?: any, isTextResponse?: boolean) {
    const headers = Config.api.options;

    if (endpoint.needsAuth) {
      headers.headers = headers.headers.set(
        'Authorization',
        'Bearer ' + this.sessionService.getToken()
      );
    } else {
      headers.headers = headers.headers.delete('Authorization');
    }

    if (endpoint.ipRemote) {
      headers.headers = headers.headers.set('ipRemota', endpoint.ipRemote);
    } else {
      headers.headers = headers.headers.delete('ipRemota');
    }

    if (endpoint.removeHeaderAccept) {
      headers.headers = headers.headers.delete('Accept');
    } else {
      headers.headers = headers.headers.set(
        'Accept',
        'application/json; text/plain'
      );
    }

    if (endpoint.removeContentType) {
      headers.headers = headers.headers.delete('Content-Type');
    } else {
      headers.headers = headers.headers.set('Content-Type', 'application/json');
    }

    if (endpoint.removeAcceptTextPlain) {
      headers.headers = headers.headers.set('Accept', 'application/json;');
    } else {
      headers.headers = headers.headers.set(
        'Accept',
        'application/json; text/plain'
      );
    }

    switch (method) {
      case 'delete':
        if (data) {
          const customHeader = {
            body: data,
            headers: headers.headers,
          };

          return this.http.request('delete', endpoint.url, customHeader);
        }

        return this.http.delete<any>(endpoint.url, headers);
      case 'get':
        const options = {
          headers: headers.headers,
          params: data || null,
        };

        return this.http.get<any>(endpoint.url, options);
      case 'post':
        if (isTextResponse) {
          // headers['responseType'] = 'text';
        }

        return this.http.post<any>(endpoint.url, data, headers);
      case 'put':
        if (isTextResponse) {
          // headers['responseType'] = 'text';
        }

        return this.http.put<any>(endpoint.url, data, headers);
      default:
        return null;
    }
  }
}
