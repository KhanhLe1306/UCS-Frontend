import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  scheduleClass: any;

  editForm = new FormGroup({
    startTime: new FormControl(),
    endTime: new FormControl(),
    meetingDays: new FormControl(),
  });

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {
    this.scheduleClass = this.modalService.scheduleClass;
    console.log(this.scheduleClass);

    this.editForm.setValue({
      startTime: this.scheduleClass.startTime,
      endTime: this.scheduleClass.endTime,
      meetingDays: this.scheduleClass.meetingDays,
    });
    //console.log(this.editForm);
  }

  onSave() {
    this.modalService.showModal = false;
    console.log(this.editForm.value);
  }
}
