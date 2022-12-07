import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateClassModel } from '../Models/interface';
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
    SaveClassChanges: () => `class/updateClass`,
    AddClass: () => `class/addClass`,
    RemoveClass: (classID: number) => `class/removeClass/${classID}`,
  };

  saveClassChanges(body: UpdateClassModel): Observable<any> {
    const url = this.routes.SaveClassChanges();
    return this.sendRequest({ body: body, url: url, method: 'POST' });
  }

  addClass(body: any): Observable<any> {
    console.log('Inside add class');
    console.log(body);
    const url = this.routes.AddClass();
    return this.sendRequest({ body: body, url: url, method: 'POST' });
  }

  removeClass(classID: number): Observable<any>{
    console.log(classID);
    const url: string = this.routes.RemoveClass(classID);
    return this.sendRequest({ url: url, method: 'POST' });
  }
}
