import { Component, Input } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  closeResult = '';
  @Input() data;
  startTime: string = '';
  endTime: string = '';

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    console.log(this.data);
    this.startTime = this.data.startTime;
    this.endTime = this.data.endTime;
  }

  onSaveChanges() {
    console.log('Save change');
  }
}
