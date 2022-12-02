import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddService } from 'src/app/services/add-class.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  results = {};
  addClassForm = new FormGroup({
    courseNum: new FormControl(''),
    section: new FormControl(''),
    instructor: new FormControl(''),
    classSize: new FormControl(''),
    classStart: new FormControl(''),
    classEnd: new FormControl(''),
    roomCode: new FormControl(''),
    room: new FormControl(''),
    mon: new FormControl(''),
    tue: new FormControl(''),
    wed: new FormControl(''),
    thu: new FormControl(''),
    fri: new FormControl(''),
    sat: new FormControl(''),
  });

  constructor(private addService: AddService) {
    const addButton = document.getElementById('home');
    addButton?.addEventListener('click', this.onSubmit);
  }

  ngOnInit(): void {
  }


  onSubmit() {
    let days = "";
    if (this.addClassForm.value.mon) {
      days += "Monday";
    }
    if (this.addClassForm.value.tue) {
      if (days.length != 0) {
        days += ",Tuesday";
      } else {
        days += "Tuesday";
      }
    }
    if (this.addClassForm.value.wed) {
      if (days.length != 0) {
        days += ",Wednesday";
      } else {
        days += "Wednesday";
      }
    }
    if (this.addClassForm.value.thu) {
      if (days.length != 0) {
        days += ",Thursday";
      } else {
        days += "Thursday";
      }
    }
    if (this.addClassForm.value.fri) {
      days += "Tuesday";
    }
    console.log(days);
    this.addService.addClass({
      'cls': this.addClassForm.value.courseNum,
      'section': this.addClassForm.value.section,
      'instructor': this.addClassForm.value.instructor,
      'classSize': this.addClassForm.value.classSize,
      'classStart': this.addClassForm.value.classStart,
      'classEnd': this.addClassForm.value.classEnd,
      'roomCode': this.addClassForm.value.roomCode,
      'room': this.addClassForm.value.room,
      'days': days
    }).subscribe((res) => {
      console.log(res);
    });
    console.log("OnSubmit Works! -> AddClass");
  };
}
