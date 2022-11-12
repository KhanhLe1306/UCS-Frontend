import { getLocaleDayNames } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class RoomService extends BaseService {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  routes = {
    GetScheduleByRoomNumber: (roomNumber: string) =>
      `room/getScheduleByRoomNumber/${roomNumber}`,
  };

  getScheduleByRoomNumber(roomNumber: string): Observable<any[]> {
    const url = this.routes.GetScheduleByRoomNumber(roomNumber);
    return this.sendRequest({ url: url, method: 'GET' });
  }
}
