import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddService } from 'src/app/services/add-class.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared.service';

/**
 * @param  {'app-add-class'} {selector
 * @param  {'./add-class.component.html'} templateUrl
 * @param  {['./add-class.component.css']}} styleUrls
 */
@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css'],
})
export class AddClassComponent implements OnInit {
  results = {};
  selectedMessage: any;
  addClassForm = new FormGroup({
    courseTitle: new FormControl(''),
    subjectCode: new FormControl(''),
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

  constructor(
    private addService: AddService,
    private sharedDataService: SharedDataService,
    private router: Router
  ) {
    /**
     * @param  {} 'home'
     * @param  {} ;addButton?.addEventListener('click'
     * @param  {} this.onSubmit
     */
    const addButton = document.getElementById('home');
    addButton?.addEventListener('click', this.onSubmit);
  }

  ngOnInit(): void {}

  onSubmit() {
    let days = [];
    if (this.addClassForm.value.mon) {
      days.push('Monday');
    }
    if (this.addClassForm.value.tue) {
      days.push('Tuesday');
    }
    if (this.addClassForm.value.wed) {
      days.push('Wednesday');
    }
    if (this.addClassForm.value.thu) {
      days.push('Thursday');
    }
    if (this.addClassForm.value.fri) {
      days.push('Friday');
    }

    let daysjoin = days.join(',');
    console.log(daysjoin);
    this.addService
      .addClass({
        courseTitle: this.addClassForm.value.courseTitle,
        subjectCode: this.addClassForm.value.subjectCode,
        courseNumber: this.addClassForm.value.courseNum,
        sectionNumber: this.addClassForm.value.section,
        instructorName: this.addClassForm.value.instructor,
        enrollment: this.addClassForm.value.classSize,
        classStart: this.addClassForm.value.classStart,
        classEnd: this.addClassForm.value.classEnd,
        roomCode: this.addClassForm.value.roomCode,
        roomNumber: this.addClassForm.value.room,
        days: daysjoin,
      })
      .subscribe((res) => {
        this.sharedDataService.changeMessage(JSON.stringify(res));
        this.router.navigate(['/success']);
      });
    console.log('OnSubmit Works! -> AddClass');
  }
}
