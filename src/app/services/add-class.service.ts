import { getLocaleDayNames } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class AddService extends BaseService {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  routes = {
    AddClass: () =>
      `class/addClass`,
  };

  addClass(addClassData): Observable<any[]> {
    console.log("add-class.service ---> ADD CLASS HAS BEEN CALLED FROM THE COMPONENT . . .");
    console.log("Calling the backend . . .")
    const url = this.routes.AddClass();
    return this.sendRequest({url: url, method: 'POST', body: addClassData});
  }
}