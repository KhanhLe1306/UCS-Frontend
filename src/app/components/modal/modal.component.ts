import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(public modalService: ModalService, private router: Router) {}

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
    const body = {
      CourseNumber: 'xxx',
      SectionNumber: 'aaa',
      InstructorName: 'bbb',
      Enrollment: 'ccc',
      ClassTime: 'ddd',
      RoomCode: 'fff',
      RoomNumber: 'ccc',
      Days: 'xxx',
    };

    this.modalService.addClass(body).subscribe((res) => console.log(res));
  }

  onRemove() {
    this.modalService.showModal = false;
    this.scheduleClassFromParent.IsDeleted = true;
    this.modalService.removeClass(this.scheduleClass.classID).subscribe(() => {
    });
  }
}
