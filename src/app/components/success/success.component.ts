import { Component, Input, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared.service';
/**
 * @param  {'app-success'} {selector
 * @param  {'./success.component.html'} templateUrl
 * @param  {['./success.component.css']}} styleUrls
 */
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  
  selectedMessage: any;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.currentMessage.subscribe((message) => {
      console.log(JSON.parse(message));
      this.selectedMessage = JSON.parse(message);
    });
  }
}
