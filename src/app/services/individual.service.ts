import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Individual } from '../Models/Individual';

@Injectable({
  providedIn: 'root',
})
export class IndividualService {
  private uri: string = 'https://localhost:7019/api/';
  constructor(private http: HttpClient) {}

  getAllIndividuals(): Observable<any[]> {
    return this.http.get<any[]>(this.uri + 'individual');
  }
  addIndividual(individual: Individual): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(individual);
    return this.http.post<any>(this.uri + 'individual', body, {
      headers: headers,
    });
  }
}
