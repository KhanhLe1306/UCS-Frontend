import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
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
  times = ['800', '830', '900', '930', '1000', '1030', '1100', '1130', '1200', '1230', '1300', '1330', '1400', '1430', '1500', '1530', '1600', '1630', '1700', '1730', '1800', '1830', '1900', '1930', '2000', '2030', '2100', '2130', '2200'];
  timesUpdated;
  iterator: number;
  testRoomSchedule: any;
  searchForm = new FormGroup({
    inputValue: new FormControl(''),
  });

  constructor(private roomService: RoomService, public modalService: ModalService) {
    const searchButton = document.getElementById('searchButton');
    searchButton?.addEventListener('click', this.onSubmit);
  }

  onSubmit() {
    console.log('Onsubmit works!');
    this.iterator = 0;
    console.log(this.searchForm.value.inputValue);
    this.roomService
      .getScheduleByRoomNumber(this.searchForm.value.inputValue)
      .subscribe((res) => {
        if (res.length != 0) {
          res.forEach((e) => {
            e.color = this.backgroundColor[this.iterator++];
          });
          this.roomSchedule = res.sort((x, y) => x.startTime - y.startTime);
          this.roomSchedule[0].startTime;
          this.timesUpdated = this.times.filter(x => Number(x) >= this.roomSchedule[0].startTime);
          this.timesUpdated = this.timesUpdated.filter(x => Number(x) <= this.roomSchedule[this.roomSchedule.length-1].endTime);
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

  showModal(scheduleClass: any) {
    this.modalService.showModal = true;
    this.modalService.scheduleClass = scheduleClass;
  }

}
