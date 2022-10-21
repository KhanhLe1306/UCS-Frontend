import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("OnSubmit Works!");
  };

}
