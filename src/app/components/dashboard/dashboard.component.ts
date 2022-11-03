import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  searchForm = new FormGroup({
    inputValue: new FormControl(''),
  });

  constructor(private roomService: RoomService) {}

  onSubmit() {
    console.log('Onsubmit works!');
    console.log(this.searchForm.value.inputValue);
    this.roomService
      .getScheduleByRoomNumber(this.searchForm.value.inputValue)
      .subscribe((res) => {
        console.log(res);
      });
  }

  dashSearch() {
    console.log('Searching...');
  }

  ngOnInit(): void {}
}
