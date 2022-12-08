import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateClassModel } from 'src/app/Models/interface';
import { SharedDataService } from 'src/app/services/shared.service';

/**
 * @param  {'app-modal'} {selector
 * @param  {'./modal.component.html'} templateUrl
 * @param  {['./modal.component.css']} styleUrls
 * @param  {} }
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  scheduleClass: any;

  @Input() scheduleClassFromParent: any;

  editForm = new FormGroup({
    startTime: new FormControl(),
    endTime: new FormControl(),
    meetingDays: new FormControl(),
  });

  constructor(public modalService: ModalService, private sharedDataService: SharedDataService, private router: Router) {}

  ngOnInit(): void {
    this.scheduleClass = this.modalService.scheduleClass;
    console.log(this.scheduleClass);

    this.editForm.setValue({
      startTime: this.scheduleClassFromParent.startTime,
      endTime: this.scheduleClassFromParent.endTime,
      meetingDays: this.scheduleClassFromParent.meetingDays,
    });
    //console.log(this.editForm);
  }

  onSave() {
    this.modalService.showModal = false;
    //console.log(this.editForm.value);

    const updateClassModel: UpdateClassModel = {
      ScheduleID: this.scheduleClassFromParent.scheduleID,
      StartTime: this.editForm.value.startTime,
      EndTime: this.editForm.value.endTime,
      MeetingDays: this.editForm.value.meetingDays,
      RoomName: this.scheduleClassFromParent.roomName,
      InstructorName: this.scheduleClassFromParent.instructor,
      CrossListedClssId: this.scheduleClassFromParent.crossListedClssID ? this.scheduleClassFromParent.crossListedClssID : '0',
      Course: this.scheduleClassFromParent.course,
      Section: this.scheduleClassFromParent.section,
      ClassId: this.scheduleClassFromParent.classID
    };


    this.modalService.saveClassChanges(updateClassModel).subscribe((res) => {
      this.sharedDataService.changeMessage(JSON.stringify(res));
      console.log(res);
      this.router.navigate(['/success']);
    });
  }

  onRemove() {
    this.modalService.showModal = false;
    this.scheduleClassFromParent.IsDeleted = true;
    this.modalService
      .removeClass(this.scheduleClass.classID)
      .subscribe(() => {});
  }
}
