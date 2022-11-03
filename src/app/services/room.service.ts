import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private uri: string = 'https://localhost:7019/api/room/';

  constructor(private http: HttpClient) {}

  getScheduleByRoomNumber(roomNumber: string): Observable<any[]> {
    return this.http.get<any[]>(
      this.uri + `getScheduleByRoomNumber/${roomNumber}`
    );
  }
}
