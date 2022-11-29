import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ModalService extends BaseService {
  showModal: boolean = false;
  scheduleClass: any;

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  routes = {
    SaveClassChanges: () => ``,
    AddClass: () => `class/addClass`,
  };

  saveClassChanges(body: any): Observable<any> {
    const url = this.routes.SaveClassChanges();
    return this.sendRequest({ body: body, url: url, method: 'POST' });
  }

  addClass(body: any): Observable<any> {
    console.log('Inside add class');
    console.log(body);
    const url = this.routes.AddClass();
    return this.sendRequest({ body: body, url: url, method: 'POST' });
  }
}
