import { getLocaleDayNames } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BaseService } from './base.service';


@Injectable({
    providedIn: 'root',
  })
export class SharedDataService extends BaseService {

    constructor(public httpClient: HttpClient) {
        super(httpClient);
      }

    public editDataDetails: any = [];
    public subject = new Subject<any>();
    private messageSource = new  BehaviorSubject(this.editDataDetails);

    currentMessage = this.messageSource.asObservable();

    async changeMessage(message: any) {
        this.messageSource.next(message);
    }

    ngOnInit() {
    }
 }