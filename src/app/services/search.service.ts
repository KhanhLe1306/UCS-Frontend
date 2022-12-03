import { getLocaleDayNames } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService extends BaseService {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  routes = {
    GetScheduleByRoomNumber: (roomNumber: string) =>
      `room/getScheduleByRoomNumber/${roomNumber}`,
    GetScheduleByInstructor: (firstName: string, lastName: string) =>
      `instructor/getScheduleByInstructor/${firstName}/${lastName}`
  };

  getScheduleByRoomNumber(roomNumber: string): Observable<any[]> {
    const url = this.routes.GetScheduleByRoomNumber(roomNumber);
    return this.sendRequest({ url: url, method: 'GET' });
  }

  getScheduleByInstructor(firstName: string, lastName: string): Observable<any[]> {
      const url = this.routes.GetScheduleByInstructor(firstName, lastName);
      return this.sendRequest({ url: url, method: 'GET' });
  }
}
