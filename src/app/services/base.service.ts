import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  serverURL: string = 'https://localhost:7019/api/';

  constructor(public httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  sendRequest({
    body = {},
    query = '',
    url,
    method = 'POST',
  }): Observable<any> {
    const URL = this.serverURL + url + query;

    if (method == 'GET') {
      return this.httpClient.get<any>(URL);
    }

    if (method == 'PUT') {
      return this.httpClient.put<any>(URL, body);
    }

    if (method == 'DELETE') {
      return this.httpClient.delete<any>(URL);
    }
    return this.httpClient.post<any>(URL, body);
  }
}
