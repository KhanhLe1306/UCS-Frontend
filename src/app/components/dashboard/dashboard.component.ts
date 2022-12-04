import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
//import { RoomService } from 'src/app/services/room.service';
import { SearchService } from 'src/app/services/search.service';
/**
 * @param  {'app-dashboard'} {selector
 * @param  {'./dashboard.component.html'} templateUrl
 * @param  {['./dashboard.component.css']} styleUrls
 * @param  {} }
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  roomSchedule: any = {};
  backgroundColor = [
    '#a9c937',
    '#24c6c7',
    '#0a844e',
    '#a312f3',
    '#476ff4',
    '#82eaca',
    '#c3a737',
    '#cd740a',
    '#f174ec',
    '#a32ff9',
    '#807787',
    '#3c96c8',
    '#f03584',
    '#5527f2',
  ];
  iterator: number;
  testRoomSchedule: any;
  searchForm = new FormGroup({
    inputValue: new FormControl(''),
  });
  /**
   * @param  {SearchService} privatesearchService
   */
  constructor(private searchService: SearchService) {
    const searchButton = document.getElementById('searchButton');
    searchButton?.addEventListener('click', this.onSubmit);
  }

  onSubmit() {
    console.log('Onsubmit works!');
    this.iterator = 0;
    console.log(this.searchForm.value.inputValue);
    this.searchService
      .getScheduleByRoomNumber(this.searchForm.value.inputValue)
      .subscribe((res) => {
        if (res.length != 0) {
          res.forEach((e) => {
            e.color = this.backgroundColor[this.iterator++];
          });
          this.roomSchedule = res.sort((x, y) => x.startTime - y.startTime);
          console.log(this.roomSchedule);
        }
      });
  }

  ngOnInit(): void {
    this.testRoomSchedule = [
      {
        roomName: 'PKI 252',
        courseTitle: 'MATHEMATICAL FOUNDATION OF COMPUTING',
        endtime: '1845',
        meetingDays: 'Tuesday,Thursday',
        course: 'CSCI 2030',
        startTime: '1730',
      },
    ];
  }
}
